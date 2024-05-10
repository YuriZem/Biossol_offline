import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuprimentoPageRoutingModule } from './suprimento-routing.module';

import { SuprimentoPage } from './suprimento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuprimentoPageRoutingModule
  ],
  declarations: [SuprimentoPage]
})
export class SuprimentoPageModule {}
