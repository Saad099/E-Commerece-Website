import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppGoalPage } from './app-goal.page';

const routes: Routes = [
  {
    path: '',
    component: AppGoalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppGoalPageRoutingModule {}
