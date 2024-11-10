import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ScaledeploymentRoutingModule } from './scale-deployment-routing.module';
import { ScaledeploymentComponent } from './scale-deployment.component';

import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown'; 
import { DialogModule } from 'primeng/dialog';



@NgModule({
  declarations: [
    ScaledeploymentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ScaledeploymentRoutingModule,
    FileUploadModule,
    ToastModule,
    ProgressBarModule,
    InputTextModule,
    DropdownModule,
    DialogModule
  ],
  providers: [MessageService],
  bootstrap: [ScaledeploymentComponent]
})
export class ScaledeploymentModule { }
