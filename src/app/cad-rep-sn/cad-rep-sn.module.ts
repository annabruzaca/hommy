import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadRepSnPageRoutingModule } from './cad-rep-sn-routing.module';

import { CadRepSnPage } from './cad-rep-sn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadRepSnPageRoutingModule
  ],
  declarations: [CadRepSnPage]
})
export class CadRepSnPageModule {}
