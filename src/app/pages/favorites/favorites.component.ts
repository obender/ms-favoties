import { Component } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { FavoritesService } from "../../@core/data/favorites.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalComponent } from "./modal/modal.component";
import { FavoriteEditType } from "../.././model/favorite-edit-type";
import { Favorite } from "../.././model/favorite";

@Component({
  selector: "ngx-favorites",
  styleUrls: ["./favorites.component.scss"],
  templateUrl: "./favorites.component.html"
})
export class FavoritesComponent {
  isTableView: boolean = true;
  toggelView() {
    this.isTableView = !this.isTableView;
  }

  search(){
    this.loadData();
  }

  addNew() {
    const activeModal = this.modalService.open(ModalComponent, {
      size: "lg",
      container: "nb-layout"
    });
    activeModal.componentInstance.modalHeader = "Add a new website";
    activeModal.componentInstance.actionType = FavoriteEditType.ADD;
    activeModal.componentInstance.modalAction = "Add Website";
    activeModal.componentInstance.caller = this;
  }

  settings = {
    actions: {
      columnTitle: "",
      add: false,
      edit: true,
      delete: true,
      position: "right"
    },
    hideHeader: false,
    hideSubHeader: true,
    noDataMessage: "No favorites found",
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>'
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true
    },
    columns: {
      name: {
        title: "Website Name",
        type: "string"
      },
      url: {
        title: "URL",
        type: "string"
      }
    }
  };

  query: string = null;

  source: LocalDataSource = new LocalDataSource();
  data;
  //function to get random colors
  public getColor(index) {
    const colors = ["purple", "blue", "red", "orange", "green"];
    return "tile " + colors[index % colors.length];
  }

  constructor(
    private service: FavoritesService,
    private modalService: NgbModal
  ) {
    this.loadData();
  }

  loadData(){
    this.data = this.service.getData(this.query);
    this.source.load(this.data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm(`Remove favorite ${event.data.name} ?`)) {
      event.confirm.resolve();
      this.service.remove(event.data as Favorite);
    } else {
      event.confirm.reject();
    }
  }

  onEdit(event): void {
      this.service.update(event.data as Favorite);
  }
}
