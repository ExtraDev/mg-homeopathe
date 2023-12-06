import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { MediaPlayerComponent } from './media-player/media-player.component';

@NgModule({
  declarations: [
    BannerComponent,
    FooterComponent,
    MediaPlayerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BannerComponent,
    FooterComponent,
    MediaPlayerComponent
  ]
})
export class SharedModule {

}
