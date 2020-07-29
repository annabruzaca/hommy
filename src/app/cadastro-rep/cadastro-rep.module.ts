import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroRepPageRoutingModule } from './cadastro-rep-routing.module';

import { CadastroRepPage } from './cadastro-rep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroRepPageRoutingModule
  ],
  declarations: [CadastroRepPage]
})
export class CadastroRepPageModule {}
