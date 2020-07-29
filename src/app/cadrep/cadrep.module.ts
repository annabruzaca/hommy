import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadrepPageRoutingModule } from './cadrep-routing.module';

import { CadrepPage } from './cadrep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadrepPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CadrepPage]
})
export class CadrepPageModule {}
