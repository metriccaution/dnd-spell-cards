import config from "../support/config";

describe("Search testing", function() {
  it("displays a placeholder'", function() {
    cy.visit(config.website);

    cy.get(".spell-card").should("have.length", 1);
    cy.get(".spell-card:first > h2").should("have.text", "Loading Spells...");
  });

  it("displays a placeholder, then loads a full list'", function() {
    cy.visit(config.website);

    cy.get(".spell-card").should("have.length", 1);
    cy.get(".spell-card").should("have.length", 319);
  });
});
