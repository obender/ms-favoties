import { Injectable } from "@angular/core";
import { Favorite } from "../../model/favorite";
import { FavoriteEditType } from "../../model/favorite-edit-type";
import { FavoriteLog } from "../../model/favorite-log";

@Injectable()
export class ActionsLogService {
  private data: Array<FavoriteLog>;

  constructor() {
    this.load();
  }

  getData() {
    return this.data;
  }

  added(item: Favorite): void {
    let log = new FavoriteLog(item, "Website was Added");
    this.data.push(log);
    this.save();
  }

  deleted(item: Favorite): void {
    let log = new FavoriteLog(item, "Website was Deleted");
    this.data.push(log);
    this.save();
  }

  updated(item: Favorite): void {
    let log = new FavoriteLog(item, "Website was Updated");
    this.data.push(log);
    this.save();
  }

  private save() {
    localStorage.setItem("ActionsLogService", JSON.stringify(this.data));
  }

  private load() {
    this.data =
      JSON.parse(localStorage.getItem("ActionsLogService")) ||
      new Array<FavoriteLog>();
  }
}
