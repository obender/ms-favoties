import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { FavoritesModule } from './favorites/favorites.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { LogModule } from './log/log.module';

const PAGES_COMPONENTS = [
  PagesComponent
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    FavoritesModule,
    LogModule
  ],
  declarations: [
    ...PAGES_COMPONENTS
  ],
})
export class PagesModule {
}
