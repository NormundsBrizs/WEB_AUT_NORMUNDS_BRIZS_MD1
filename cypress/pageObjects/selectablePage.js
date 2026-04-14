import { BasePage } from "./basePage";

export class SelectablePage extends BasePage {
    static get selectableButton() {
        return cy.get('#selectableButton');
    }
}