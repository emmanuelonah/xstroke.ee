///<reference types="cypress"/>

/*-------------------------------------
test for login view
--------------------------------------*/
describe("Testing login view", () => {
    //Positive testing
    it("should logged user into the app", () => {
        cy.loginToApp("STAGING", "admin");
    });

    //Negative testing
    it("should not log user into the app", () => {
        cy.dontLoginToApp("STAGING");
    });
});
