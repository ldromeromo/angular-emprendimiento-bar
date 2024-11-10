import { NgModule } from '@angular/core';
import { PathLocationStrategy, LocationStrategy, CommonModule, HashLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';

import { ProgressBarModule } from 'primeng/progressbar';
import { MessagesModule } from 'primeng/messages';
import { DialogModule } from 'primeng/dialog';

@NgModule({
    declarations: [AppComponent],
    imports: [
        CommonModule,
        AppRoutingModule,
        AppLayoutModule,
        ProgressBarModule,
        MessagesModule,
        DialogModule
    ],
    providers: [
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}

