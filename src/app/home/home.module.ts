import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TranslocoRootModule } from '../shared/transloco-root.module';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { provideTranslocoScope } from '@ngneat/transloco';

@NgModule({
    declarations: [
        HomeComponent
    ],
    providers: [
        provideTranslocoScope('home')
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        TranslocoRootModule,
        MatButtonModule,
        SharedModule,
    ]
})
export class HomeModule { }
