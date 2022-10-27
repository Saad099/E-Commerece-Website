import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepresentingPageRoutingModule } from './representing-routing.module';

import { RepresentingPage } from './representing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepresentingPageRoutingModule
  ],
  declarations: [RepresentingPage]
})
export class RepresentingPageModule {}
