import config from "../support/config";

describe("Search testing", () => {
  /**
   * Make a search for a spell, and check the results are what would be expected
   *
   * @param {string} searchTerm The value to search for
   * @param {string[]} expectedResults The expected results from searching
   */
  const searchCase = (searchTerm, expectedResults) => {
    cy.visit(config.website);
    cy.get('input[placeholder="Search"]').type(searchTerm);
    cy.get(".spell-card").should("have.length", expectedResults.length);
    expectedResults.forEach((name, index) => {
      cy.get(`.spell-card:nth-child(${index + 1}) > h2`).should(
        "have.text",
        name
      );
    });
  };

  it("looking for 'Wish'", () =>
    searchCase("Wish", [
      "Calm Emotions",
      "Geas",
      "Disintegrate",
      "Freezing Sphere",
      "Divine Word",
      "Fire Storm",
      "Simulacrum",
      "Feeblemind",
      "Mind Blank",
      "True Polymorph",
      "Wish"
    ]));

  it("looking for 'wish'", () =>
    searchCase("wish", [
      "Calm Emotions",
      "Geas",
      "Disintegrate",
      "Freezing Sphere",
      "Divine Word",
      "Fire Storm",
      "Simulacrum",
      "Feeblemind",
      "Mind Blank",
      "True Polymorph",
      "Wish"
    ]));

  it("looking for 'prismatic spray'", () =>
    searchCase("prismatic spray", ["Prismatic Spray"]));

  it("searches by description text", () => {
    cy.visit(config.website);
    cy.get('input[placeholder="Search"]').type(
      "Completely covering the object with something opaque"
    );

    cy.get(".spell-card").should("have.length", 1);
    cy.get(".spell-card:first > h2").should("have.text", "Light");
  });

  // TODO - Search by higher-level
});

describe("Filter by spell level", () => {
  it("Searching for level 7 to 8 spells", () => {
    cy.visit(config.website);
    cy.get(".open-sidebar").click();
    cy.get("input[name=min-level]")
      .clear()
      .type(7);
    cy.get("input[name=max-level]")
      .clear()
      .type(8);

    cy.get(".spell-card").should("have.length", 36);
    // TODO - Check spell levels
  });

  it("searchng for levels 8 to 7 spells returns no results", () => {
    cy.visit(config.website);
    cy.get(".open-sidebar").click();
    cy.get("input[name=min-level]")
      .clear()
      .type(8);
    cy.get("input[name=max-level]")
      .clear()
      .type(7);

    cy.get(".spell-card").should("have.length", 0);
  });
});

describe("Filterng by class", () => {
  it("Filters appropriately for Rangers", () => {
    cy.visit(config.website);
    cy.get(".open-sidebar").click();
    cy.get("#choose-filter-Ranger").click();

    cy.get(".spell-card").should("have.length", 37);
  });
});

describe("Search smoke tests", () => {
  it("Using all types of search behaviour", () => {
    cy.visit(config.website);

    cy.get('input[placeholder="Search"]')
      .clear()
      .type("Conjure Celestial");
    cy.get(".spell-card").should("have.length", 1);
    cy.get(".spell-card:first > h2").should("have.text", "Conjure Celestial");

    // Choose an invalid class
    cy.get(".open-sidebar").click();
    cy.get("#choose-filter-Ranger").click();
    cy.get(".open-sidebar").click();
    cy.get(".spell-card").should("have.length", 0);

    // Add a valid class
    cy.get(".open-sidebar").click();
    cy.get("#choose-filter-Cleric").click();
    cy.get(".open-sidebar").click();
    cy.get(".spell-card").should("have.length", 1);
    cy.get(".spell-card:first > h2").should("have.text", "Conjure Celestial");

    // Set a valid level check
    cy.get(".open-sidebar").click();
    cy.get("input[name=min-level]")
      .clear()
      .type(5);
    cy.get(".open-sidebar").click();
    cy.get(".spell-card").should("have.length", 1);
    cy.get(".spell-card:first > h2").should("have.text", "Conjure Celestial");

    // Make the level check miss
    cy.get(".open-sidebar").click();
    cy.get("input[name=max-level]")
      .clear()
      .type(6);
    cy.get(".open-sidebar").click();
    cy.get(".spell-card").should("have.length", 0);

    // Make it valid again
    cy.get(".open-sidebar").click();
    cy.get("input[name=max-level]")
      .clear()
      .type(8);
    cy.get(".open-sidebar").click();
    cy.get(".spell-card").should("have.length", 1);
    cy.get(".spell-card:first > h2").should("have.text", "Conjure Celestial");
  });
});
