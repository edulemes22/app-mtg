import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetsPage } from './sets.page';
import { SetsListComponent } from './sets-list/sets-list.component';

const routes: Routes = [
  {
    path: '',
    component: SetsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetsPageRoutingModule {}
