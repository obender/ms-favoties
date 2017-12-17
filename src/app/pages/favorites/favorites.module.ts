import { NgModule } from "@angular/core";
import { AngularEchartsModule } from "ngx-echarts";
import { Ng2SmartTableModule } from "ng2-smart-table";

import { ThemeModule } from "../../@theme/theme.module";
import { FavoritesComponent } from "./favorites.component";
import { FavoritesService } from "../../@core/data/favorites.service";
import { ModalComponent } from "./modal/modal.component";

const components = [FavoritesComponent, ModalComponent];

@NgModule({
  imports: [ThemeModule, Ng2SmartTableModule],
  providers: [FavoritesService],
  declarations: [...components],
  entryComponents: [ModalComponent]
})
export class FavoritesModule {}
