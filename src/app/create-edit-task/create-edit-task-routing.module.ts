import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateEditTaskPage } from './create-edit-task.page';

const routes: Routes = [
  {
    path: '',
    component: CreateEditTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateEditTaskPageRoutingModule {}
