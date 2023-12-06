import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss']
})
export class MediaPlayerComponent {
  @Input() link?: string = '';

  constructor() {
    console.log(this.link);
  }
}
