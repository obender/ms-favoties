import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FavoritesService } from "./favorites.service";
import { ActionsLogService } from "./actions.log.service";

const SERVICES = [
  FavoritesService,
  ActionsLogService
];

@NgModule({
  imports: [CommonModule],
  providers: [...SERVICES]
})
export class DataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: DataModule,
      providers: [...SERVICES]
    };
  }
}
