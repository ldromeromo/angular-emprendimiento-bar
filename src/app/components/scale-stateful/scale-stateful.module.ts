import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ScalestatefulRoutingModule } from './scale-stateful-routing.module';
import { ScalestatefulComponent } from './scale-stateful.component';

import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown'; 
import { DialogModule } from 'primeng/dialog';



@NgModule({
  declarations: [
    ScalestatefulComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ScalestatefulRoutingModule,
    FileUploadModule,
    ToastModule,
    ProgressBarModule,
    InputTextModule,
    DropdownModule,
    DialogModule
  ],
  providers: [MessageService],
  bootstrap: [ScalestatefulComponent]
})
export class ScalestatefulModule { }
