import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateEditTaskPageRoutingModule } from './create-edit-task-routing.module';

import { CreateEditTaskPage } from './create-edit-task.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateEditTaskPageRoutingModule
  ],
  declarations: [CreateEditTaskPage]
})
export class CreateEditTaskPageModule {}
