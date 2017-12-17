import { Component } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FavoriteEditType } from "../../../model/favorite-edit-type";
import { Favorite } from "../../../model/favorite";
import { FavoritesService } from "../../../@core/data/favorites.service";
import { UUID } from "angular2-uuid";

@Component({
  selector: "ngx-modal",
  styleUrls: ["../favorites.component.scss"],
  templateUrl: "modal.component.html"
})
export class ModalComponent {
  modalHeader: string;
  modalAction: string;
  modalContent = ``;
  actionType: FavoriteEditType;
  actionItem: Favorite;
  name: string;
  url: string;
  vaidated  = false;
  caller;

  constructor(
    private activeModal: NgbActiveModal,
    private service: FavoritesService
  ) {}

  action() {
    this.vaidated=true;
    if(!this.name || !this.url){
      return;
    }
    switch (this.actionType) {
      case FavoriteEditType.ADD:
        let item = new Favorite(UUID.UUID(), this.name, this.url);
        this.service.addNew(item);
        break;
    }
    this.caller.loadData();
    this.activeModal.close();
  }

  closeModal() {
    this.activeModal.close();
  }
}
