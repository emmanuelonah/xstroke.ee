import envData from "../fixtures/cypress.env.json";
import signupData from "../fixtures/signup-data.json";

///<reference types="cypress"/>
// ***********************************************
// This example commands.js shows you how to
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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

///Login Command
Cypress.Commands.add("loginToApp", (env, role) => {
  cy.visit(envData[env].url);
  cy.get(".give__try").click();
  cy.get(".acceptance__button").click();
  cy.get('[name="email"]').type(envData[env][role].email);
  cy.get('[name="password"]').type(envData[env][role].password);
  cy.get('[type="submit"]').click();
});

Cypress.Commands.add("dontLoginToApp", env => {
  cy.visit(envData[env].url);
  cy.get(".give__try").click();
  cy.get(".acceptance__button").click();
  cy.get('[name="email"]').type(envData.fakeMail);
  cy.get('[name="password"]').type(envData.fakePassword);
  cy.get('[type="submit"]').click();
});

///Signup Command
Cypress.Commands.add("signup", env => {
  cy.visit(envData[env].url);
  cy.get(".give__try").click();
  cy.get(".acceptance__button").click();
  cy.get('a[href="./signup"]').click();
  cy.get("#userName").type(signupData.userName);
  cy.get("#email").type(signupData.email);
  cy.get("#password").type(signupData.password);
  cy.get("#estonianId").type(signupData.estonianId);
  cy.get("#signup").click();
});
