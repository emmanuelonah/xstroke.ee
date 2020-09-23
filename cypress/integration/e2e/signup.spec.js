import signupData from "../../fixtures/signup-data.json";

///<reference types="cypress"/>

///signup
describe("signup user", () => {
  it("sign user up", () => {
    cy.signup("STAGING");

    ///use signup email to login to app
    cy.get('a[href="./login"]').click();
    cy.get("#email").type(signupData.email);
    cy.get("#password").type(signupData.password);
    cy.get("#login").click();

    ///use  estonianId to login
    cy.get(".menu--bar").click();
  });
});
