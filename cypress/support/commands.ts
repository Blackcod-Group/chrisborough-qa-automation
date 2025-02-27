/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add('clickElement', (element) => {
    cy.get(element).should('exist').click()
})

Cypress.Commands.add("login", () => {
    cy.visit("/" , { failOnStatusCode: false});
    cy.click;
    cy.url().should("include", "/");
    cy.get('input#email').type("Omolaja@bluebulbfinancials.com");
    cy.get('#password').type("@Password1234");
    cy.contains("Log In").click({force: true});
    cy.get('.pincode-input-container > :nth-child(1)').type("2", {force: true});
    cy.get('.pincode-input-container > :nth-child(2)').type("2");
    cy.get('.pincode-input-container > :nth-child(3)').type("2");
    cy.get('.pincode-input-container > :nth-child(4)').type("2");
    cy.get('.pincode-input-container > :nth-child(5)').type("2");
    cy.get('.pincode-input-container > :nth-child(6)').type("2");
    cy.get('.pincode-input-container > :nth-child(7)').type("2");
    cy.get('.pincode-input-container > :nth-child(8)').type("2");
    cy.wait(1000)
    cy.contains('Sign In').click({force: true});

    //cy.contains("Sign In").click({force: true});
    //cy.url().should("contain","Dashboard");
    
})
// Cypress.Commands.add('typeAText', (field, text) =>{
//     cy.get(field).should('exist').type(text)
// })

