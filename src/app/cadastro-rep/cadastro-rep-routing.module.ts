import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroRepPage } from './cadastro-rep.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroRepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroRepPageRoutingModule {}
