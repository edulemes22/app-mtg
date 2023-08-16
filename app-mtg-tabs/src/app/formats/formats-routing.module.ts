import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormatsPage } from './formats.page';
import { FormatsListComponent } from './formats-list/formats-list.component';

const routes: Routes = [
  {
    path: '',
    component: FormatsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormatsPageRoutingModule {}
