import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScalestatefulComponent } from './scale-stateful.component';

const routes: Routes = [
  {path: '', component: ScalestatefulComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScalestatefulRoutingModule { }
