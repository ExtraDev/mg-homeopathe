import { Component } from '@angular/core';

@Component({
  selector: 'app-dropper',
  templateUrl: './dropper.component.html',
  styleUrls: ['./dropper.component.scss']
})
export class DropperComponent {
  public showDropperContent: boolean = false;

  public displayDropper() {
    console.log("Display");
    this.showDropperContent = !this.showDropperContent;
  }
}