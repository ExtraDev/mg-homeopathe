import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { languagesList } from 'src/environments/environments';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public title = 'mg-homeopathe';
    public showNavBar: boolean = false;
    public languagesList = languagesList;

    constructor() { }

    public changeLanguage(language: string): void {
        // this.translocoService.setActiveLang(language);
    }

    public getLanguageList(): Array<Record<'code' | 'name' | 'shortlang', string>> {
        return this.languagesList;
    }

    public toggleNavbar() {
        console.log("toggleNavbar");
        this.showNavBar = !this.showNavBar;
    }

    public hiddeNavbar() {
        this.showNavBar = false;
    }
}
