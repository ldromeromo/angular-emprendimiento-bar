import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScaledeploymentComponent } from './scale-deployment.component';

const routes: Routes = [
  {path: '', component: ScaledeploymentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScaledeploymentRoutingModule { }
