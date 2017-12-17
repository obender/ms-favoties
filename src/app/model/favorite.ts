export class Favorite {
  public name: string;
  public id: string;
  public url: string;

  constructor(id: string, name: string, url: string) {
    this.id = id;
    this.name = name;
    this.url = url;
  }
}
