import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoricalsLeadsComponent } from './historicals-leads.component';

const routes: Routes = [
  {path: '', component: HistoricalsLeadsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoricalsLeadsRoutingModule { }
