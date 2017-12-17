import { Favorite } from "./favorite";
import { FavoriteEditType } from "./favorite-edit-type";
export class FavoriteLog {
  public id: string;
  public name: string;
  public url: string;
  public action: string;
  public timestamp: string;
  constructor(item: Favorite, action: string) {
    this.id = item.id;
    this.name = item.name;
    this.url = item.url;
    this.action = action;
    this.timestamp = new Date().toLocaleDateString("en-US", this.timeOptions);
  }

  private timeOptions = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  };
}
