var faker = require('faker');

describe("Changing Button", function() {
  it("clicks the button (fails)", function() {
    cy.visit("/");
    cy.get('#changing-button').click()
  });

  it("clicks the button (succeeds)", function() {
    cy.visit("/");
    cy.get("#changing-button")
    .should("be.visible")
    .then($btn => {
      $btn.click();
    });
  })
});