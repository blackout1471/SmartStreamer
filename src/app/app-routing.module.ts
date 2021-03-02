import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';

import { TopMenuComponent } from './top-menu/top-menu.component';
import { LandingPageComponent} from './landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: TopMenuComponent,
    outlet: "topBar-router"
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    outlet: "topBar-router"
  },
  {
    path: '',
    component: LandingPageComponent,
    outlet: "mainContent-router"
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    outlet: "mainContent-router"
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
