import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    // component: HomeComponent
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  { path: 'consultation', loadChildren: () => import('./consultation/consultation.module').then(m => m.ConsultationModule) }, {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
