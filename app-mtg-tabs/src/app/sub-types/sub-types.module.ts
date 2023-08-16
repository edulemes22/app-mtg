import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubTypesPageRoutingModule } from './sub-types-routing.module';

import { SubTypesPage } from './sub-types.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubTypesPageRoutingModule
  ],
  declarations: [SubTypesPage]
})
export class SubTypesPageModule {}
