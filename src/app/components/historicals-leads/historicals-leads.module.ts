import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoricalsLeadsRoutingModule } from './historicals-leads-routing.module';
import { HistoricalsLeadsComponent } from './historicals-leads.component';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';


@NgModule({
  declarations: [
    HistoricalsLeadsComponent
  ],
  imports: [
    CommonModule,
    HistoricalsLeadsRoutingModule,
    TableModule,
    ButtonModule,
    ToolbarModule
  ]
})
export class HistoricalsLeadsModule { }
