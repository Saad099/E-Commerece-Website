import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppGoalPageRoutingModule } from './app-goal-routing.module';

import { AppGoalPage } from './app-goal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppGoalPageRoutingModule
  ],
  declarations: [AppGoalPage]
})
export class AppGoalPageModule {}
