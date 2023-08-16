import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubTypesPage } from './sub-types.page';
import { SubTypesListComponent } from './sub-types-list/sub-types-list.component';

const routes: Routes = [
  {
    path: '',
    component: SubTypesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubTypesPageRoutingModule {}
