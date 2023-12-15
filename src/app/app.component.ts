import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public title = 'mg-homeopathe';
    public showNavBar: boolean = false;

    constructor(private translocoService: TranslocoService) { }

    public languagesList: Array<Record<'code' | 'name' | 'shortlang', string>> = [
        {
            code: 'fr',
            name: 'Français',
            shortlang: 'FR',
        }, {
            code: 'en',
            name: 'English',
            shortlang: 'ENG',
        }, {
            code: 'uk',
            name: 'Ukrainien',
            shortlang: 'UK',
        }, {
            code: 'ru',
            name: 'Russe',
            shortlang: 'Russe',
        }
    ]

    public changeLanguage(language: string): void {
        this.translocoService.setActiveLang(language);
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
