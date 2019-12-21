import config from "../support/config";

describe("Search testing", () => {
  it("displays a placeholder'", () => {
    cy.visit(config.website);

    cy.get(".spell-card").should("have.length", 1);
    cy.get(".spell-card:first > h2").should("have.text", "Loading Spells...");
  });

  it("displays a placeholder, then loads a full list'", () => {
    cy.visit(config.website);

    cy.get(".spell-card").should("have.length", 1);
    cy.get(".spell-card").should("have.length", 319);
  });
});
