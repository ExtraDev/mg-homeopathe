import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { InfosComponent } from './infos.component';
import { InfosRoutingModule } from './infos-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MapComponent,
    InfosComponent
  ],
  imports: [
    CommonModule,
    InfosRoutingModule,
    SharedModule
  ]
})
export class InfosModule { }
