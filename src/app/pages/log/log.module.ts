import { NgModule } from "@angular/core";
import { AngularEchartsModule } from "ngx-echarts";
import { Ng2SmartTableModule } from "ng2-smart-table";

import { ThemeModule } from "../../@theme/theme.module";
import { FavoritesService } from "../../@core/data/favorites.service";
import { ActionsLogService } from "../../@core/data/actions.log.service";

import { LogComponent } from "./log.component";

const components = [LogComponent];

@NgModule({
  imports: [ThemeModule, Ng2SmartTableModule],
  declarations: [...components],
  providers: [FavoritesService, ActionsLogService]
})
export class LogModule {}
