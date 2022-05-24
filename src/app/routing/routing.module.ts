import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerticalLayoutComponent } from '../layout/vertical';
import { PublicLayoutComponent } from '../layout/public';

import { PageInputsComponent } from '../pages/inputs/inputs.component';
import { PageCardsComponent } from '../pages/cards/cards.component';
import { PageButtonsComponent } from '../pages/buttons/buttons.component';
import { PageRatingsComponent } from '../pages/ratings/ratings.component';
import { PageAlertsComponent } from '../pages/alerts/alerts.component';
import { PageAvatarsComponent } from '../pages/avatars/avatars.component';
import { PageBadgesComponent } from '../pages/badges/badges.component';
import { PageFilesComponent } from '../pages/files/files.component';
// import { PageSelectsComponent } from '../pages/selects';
// import { PageTextareasComponent } from '../pages/textareas';
// import { PageAutocompletesComponent } from '../pages/autocompletes';
// import { PageCheckboxesComponent } from '../pages/checkboxes';
// import { PageRadioButtonsComponent } from '../pages/radio-buttons';
// import { PageSwitchersComponent } from '../pages/switchers';
// import { PageContactsComponent } from '../pages/contacts';
// import { PageModalWindowsComponent } from '../pages/modal-windows';
// import { PageVTimelineComponent } from '../pages/v-timeline';
// import { PageDatepickersComponent } from '../pages/datepickers';
import { Page404Component } from '../pages/page-404/page-404.component';

const privateRoutes: Routes = [
  { path: 'inputs', component: PageInputsComponent },
  { path: 'cards', component: PageCardsComponent },
  { path: 'buttons', component: PageButtonsComponent },
  { path: 'ratings', component: PageRatingsComponent },
  { path: 'alerts', component: PageAlertsComponent },
  { path: 'avatars', component: PageAvatarsComponent },
  { path: 'badges', component: PageBadgesComponent },
  { path: 'files', component: PageFilesComponent },
  // { path: 'selects', component: PageSelectsComponent },
  // { path: 'textareas', component: PageTextareasComponent },
  // { path: 'autocompletes', component: PageAutocompletesComponent },
  // { path: 'checkboxes', component: PageCheckboxesComponent },
  // { path: 'contacts', component: PageContactsComponent },
  // { path: 'datepickers', component: PageDatepickersComponent },
  // { path: 'radio-buttons', component: PageRadioButtonsComponent },
  // { path: 'switchers', component: PageSwitchersComponent },
  // { path: 'modal-windows', component: PageModalWindowsComponent },
  // { path: 'v-timeline', component: PageVTimelineComponent },
];

const publicRoutes: Routes = [
  { path: 'page-404', component: Page404Component },
  { path: '**', component: Page404Component }
];

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/vertical/inputs',
    pathMatch: 'full'
  },
  {
    path: 'vertical',
    component: VerticalLayoutComponent,
    children: privateRoutes
  },
  {
    path: '**',
    component: PublicLayoutComponent,
    children: publicRoutes
  }
];

@NgModule({
  imports: [],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
