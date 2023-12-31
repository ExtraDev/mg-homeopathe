import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { provideTranslocoScope } from '@ngneat/transloco';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    }, {
        path: 'consultation',
        loadChildren: () => import('./consultation/consultation.module').then(m => m.ConsultationModule)
    }, {
        path: 'infos',
        loadChildren: () => import('./infos/infos.module').then(m => m.InfosModule)
    }, {
        path: '**',
        component: HomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
