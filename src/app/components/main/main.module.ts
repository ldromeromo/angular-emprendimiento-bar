import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown'; 
import { DialogModule } from 'primeng/dialog';



@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MainRoutingModule,
    FileUploadModule,
    ToastModule,
    ProgressBarModule,
    InputTextModule,
    DropdownModule,
    DialogModule
  ],
  providers: [MessageService],
  bootstrap: [MainComponent]
})
export class MainModule { }
