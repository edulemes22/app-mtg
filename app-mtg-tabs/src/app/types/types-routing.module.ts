import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypesPage } from './types.page';
import { TypesListComponent } from './types-list/types-list.component';

const routes: Routes = [
  {
    path: '',
    component: TypesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypesPageRoutingModule {}
