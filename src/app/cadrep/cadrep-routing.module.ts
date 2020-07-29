import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadrepPage } from './cadrep.page';

const routes: Routes = [
  {
    path: '',
    component: CadrepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadrepPageRoutingModule {}
