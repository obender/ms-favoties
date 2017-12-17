import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { LogComponent } from './log/log.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'favorites',
    component: FavoritesComponent,
  },{
    path: 'actions-log',
    component: LogComponent,
  }, {
    path: '',
    redirectTo: 'favorites',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
