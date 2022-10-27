import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrameworkPageRoutingModule } from './framework-routing.module';

import { FrameworkPage } from './framework.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrameworkPageRoutingModule
  ],
  declarations: [FrameworkPage]
})
export class FrameworkPageModule {}
