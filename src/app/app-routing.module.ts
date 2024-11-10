import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from "./layout/app.layout.component";

const routes: Routes = [
    { path: '', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },
    {
        path: '', component: AppLayoutComponent,
        children: [
            { path: 'hitoricals-leads', loadChildren: () => import('./components/historicals-leads/historicals-leads.module').then(m => m.HistoricalsLeadsModule)},
            { path: 'scale-deployment', loadChildren: () => import('./components/scale-deployment/scale-deployment.module').then(m => m.ScaledeploymentModule)},
            { path: 'scale-stateful', loadChildren: () => import('./components/scale-stateful/scale-stateful.module').then(m => m.ScalestatefulModule)},
            { path: 'home', loadChildren: () => import('./components/main/main.module').then(m => m.MainModule)},
            // { path: '', redirectTo: '/home', pathMatch: 'full' }
        ]
    },            
    // { path: '**', redirectTo: '/home' }
    { path: '**', redirectTo: '', pathMatch: 'full' }
]

@NgModule({
    imports: [        
        RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
