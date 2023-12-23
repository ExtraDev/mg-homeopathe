import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    constructor(private translocoService: TranslocoService) {
        this.translocoService.setActiveLang('fr')
    }
}
