import { Injectable } from "@angular/core";
import { Favorite } from "../../model/favorite";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";
import { ActionsLogService } from "./actions.log.service";

@Injectable()
export class FavoritesService {
  private data: Array<Favorite>;

  constructor(private actionsLog: ActionsLogService) {
    this.load();
  }

  getData(query: string) {
    var filtered = query != null && query != undefined && query != "";
    var result = filtered
      ? this.data.filter(
          obj =>
            obj.name.toLowerCase().indexOf(query.toLowerCase()) > 0 ||
            obj.url.toLowerCase().indexOf(query.toLowerCase()) > 0
        )
      : this.data;

    return result;
  }

  addNew(item: Favorite) {
    this.data.push(item);
    this.actionsLog.added(item);
    this.save();
  }

  remove(item: Favorite) {
    this.data = this.data.filter(obj => obj.id != item.id);
    this.actionsLog.deleted(item);
    this.save();
  }

  update(item: Favorite) {
    this.actionsLog.updated(item);
    this.save();
  }

  private save() {
    localStorage.setItem("Favorites", JSON.stringify(this.data));
  }

  private load() {
    this.data =
      JSON.parse(localStorage.getItem("Favorites")) || new Array<Favorite>();
  }
}
