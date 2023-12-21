import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeoComponent } from './homeo/homeo.component';
import { PhytoComponent } from './phyto/phyto.component';

const routes: Routes = [
  { path: 'homeo', component: HomeoComponent },
  { path: 'phyto', component: PhytoComponent },
  { path: '**', component: HomeoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultationRoutingModule { }
