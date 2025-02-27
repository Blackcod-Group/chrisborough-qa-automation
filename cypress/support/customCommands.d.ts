declare namespace Cypress {
    interface Chainable<Subject> {
        login(): Chainable<any>
        clickElement(element: any): Chainable<any>
        typeAText(field: any, text: any): Chainable<any>
  }
}