import { Component, OnInit, Input } from "@angular/core";
import { ActionsLogService } from "../../@core/data/actions.log.service";
import { ViewCell, LocalDataSource } from "ng2-smart-table";

@Component({
  selector: "app-log",
  templateUrl: "./log.component.html",
  styleUrls: ["./log.component.scss"]
})
export class LogComponent implements OnInit {
  data: any;
  source: LocalDataSource = new LocalDataSource();

  constructor(private actionsLog: ActionsLogService) {}

  ngOnInit() {
    this.data = this.actionsLog.getData();
    this.source.load(this.data);
  }

  settings = {
    actions: {
      columnTitle: "",
      add: false,
      edit: false,
      delete: false,
      position: "right"
    },
    hideHeader: false,
    hideSubHeader: true,
    noDataMessage: "No actions found",
    columns: {
      timestamp: {
        title: "Date / Time",
        type: "string",
      },
      action: {
        title: "Action",
        type: "string"
      },
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
}
