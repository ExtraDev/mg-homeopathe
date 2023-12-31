import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultationRoutingModule } from './consultation-routing.module';
import { HomeoComponent } from './homeo/homeo.component';
import { PhytoComponent } from './phyto/phyto.component';
import { SharedModule } from '../shared/shared.module';
import { DropperComponent } from './dropper/dropper.component';
import { TranslocoModule } from '@ngneat/transloco';


@NgModule({
  declarations: [
    HomeoComponent,
    PhytoComponent,
    DropperComponent
  ],
  imports: [
    CommonModule,
    ConsultationRoutingModule,
    SharedModule,
    TranslocoModule
  ],
  exports: [
    DropperComponent
  ]
})
export class ConsultationModule { }
