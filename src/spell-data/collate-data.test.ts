import test from "ava";
import collate from "./collate-data";

test("Collating nothing", t => {
  const actual = collate([]);
  t.deepEqual([], actual);
});

test("Collating an empty data set", t => {
  const actual = collate([
    {
      pages: [],
      sources: [],
      spells: [],
      aliases: []
    },
    {
      pages: [],
      sources: [],
      spells: [],
      aliases: []
    }
  ]);
  t.deepEqual([], actual);
});

test("A bit of everything", t => {
  const actual = collate([
    {
      pages: [
        {
          spellName: "A spell",
          page: {
            book: "Book 2",
            pageNumber: 3
          }
        },
        {
          spellName: "Aliased spell",
          page: {
            book: "Book 3",
            pageNumber: 13
          }
        }
      ],
      sources: [
        {
          knownBy: "Extra subclass",
          spells: ["Another spell"]
        },
        {
          knownBy: "Someone else",
          spells: ["Aliased spell"]
        }
      ],
      spells: [],
      aliases: []
    },
    {
      pages: [
        {
          spellName: "Another spell",
          page: {
            book: "Book 1",
            pageNumber: 512
          }
        },
        {
          spellName: "A spell",
          page: {
            book: "Book 1",
            pageNumber: 53
          }
        },
        {
          spellName: "A spell",
          page: {
            book: "Book 1",
            pageNumber: 2
          }
        }
      ],
      sources: [
        {
          knownBy: "Base Class 1",
          spells: ["Another spell"]
        },
        {
          knownBy: "Base Class 2",
          spells: ["A spell"]
        }
      ],
      spells: [
        {
          name: "A spell",
          castingTime: "Quick",
          components: [],
          concentration: true,
          ritual: false,
          description: "A\n\nB",
          duration: "Some time",
          higherLevel: null,
          level: 3,
          material: null,
          range: "Long",
          school: "Spellomancy"
        },
        {
          name: "Another spell",
          castingTime: "Long",
          components: [],
          concentration: false,
          ritual: false,
          description: "C",
          duration: "Instantaneous",
          higherLevel: "D",
          level: 0,
          material: "A brick",
          range: "Touch",
          school: "Spellomancy"
        }
      ],
      aliases: [
        {
          names: ["Another spell", "Aliased spell"]
        }
      ]
    }
  ]);

  t.deepEqual(
    [
      {
        name: "Another spell",
        castingTime: "Long",
        components: [],
        concentration: false,
        ritual: false,
        description: "C",
        duration: "Instantaneous",
        higherLevel: "D",
        level: 0,
        material: "A brick",
        range: "Touch",
        school: "Spellomancy",
        knownBy: ["Base Class 1", "Extra subclass", "Someone else"],
        aliases: ["Aliased spell"],
        pages: [
          {
            book: "Book 1",
            pageNumber: 512
          },
          {
            book: "Book 3",
            pageNumber: 13
          }
        ]
      },
      {
        name: "A spell",
        castingTime: "Quick",
        components: [],
        concentration: true,
        ritual: false,
        description: "A\n\nB",
        duration: "Some time",
        higherLevel: null,
        level: 3,
        material: null,
        range: "Long",
        school: "Spellomancy",
        knownBy: ["Base Class 2"],
        aliases: [],
        pages: [
          {
            book: "Book 1",
            pageNumber: 2
          },
          {
            book: "Book 1",
            pageNumber: 53
          },
          {
            book: "Book 2",
            pageNumber: 3
          }
        ]
      }
    ],
    actual
  );
});

test("Duplicate spell names across multiple sources just picks the first", t => {
  const actual = collate([
    {
      aliases: [],
      pages: [],
      sources: [],
      spells: [
        {
          name: "Spell",
          castingTime: "Quick",
          components: [],
          concentration: true,
          ritual: false,
          description: "First",
          duration: "Some time",
          higherLevel: null,
          level: 3,
          material: null,
          range: "Long",
          school: "Spellomancy"
        },
        {
          name: "Spell",
          castingTime: "Quick",
          components: [],
          concentration: true,
          ritual: false,
          description: "Second",
          duration: "Some time",
          higherLevel: null,
          level: 3,
          material: null,
          range: "Long",
          school: "Spellomancy"
        }
      ]
    },
    {
      aliases: [],
      pages: [],
      sources: [],
      spells: [
        {
          name: "Spell",
          castingTime: "Quick",
          components: [],
          concentration: true,
          ritual: false,
          description: "third",
          duration: "Some time",
          higherLevel: null,
          level: 3,
          material: null,
          range: "Long",
          school: "Spellomancy"
        }
      ]
    }
  ]);

  t.deepEqual(actual, [
    {
      name: "Spell",
      castingTime: "Quick",
      components: [],
      concentration: true,
      ritual: false,
      description: "First",
      duration: "Some time",
      higherLevel: null,
      level: 3,
      material: null,
      range: "Long",
      school: "Spellomancy",
      aliases: [],
      knownBy: [],
      pages: []
    }
  ]);
});
