import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepresentingPage } from './representing.page';

const routes: Routes = [
  {
    path: '',
    component: RepresentingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepresentingPageRoutingModule {}
