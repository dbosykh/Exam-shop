export default class BasePage{ 

    getHeader(){
        return cy.get('app-navbar > .mat-toolbar > .mat-toolbar-row')
    }
}

