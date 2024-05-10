import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuprimentoPage } from './suprimento.page';

const routes: Routes = [
  {
    path: '',
    component: SuprimentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuprimentoPageRoutingModule {}
