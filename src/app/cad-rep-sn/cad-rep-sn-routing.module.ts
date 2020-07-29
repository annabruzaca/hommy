import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadRepSnPage } from './cad-rep-sn.page';

const routes: Routes = [
  {
    path: '',
    component: CadRepSnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadRepSnPageRoutingModule {}
