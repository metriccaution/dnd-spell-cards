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
      spells: []
    },
    {
      pages: [],
      sources: [],
      spells: []
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
        }
      ],
      sources: [
        {
          knownBy: "Extra subclass",
          spells: ["Another spell"]
        }
      ],
      spells: []
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
          description: ["A", "B"],
          duration: "Some time",
          higherLevel: [],
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
          description: ["C"],
          duration: "Instantaneous",
          higherLevel: ["D"],
          level: 0,
          material: "A brick",
          range: "Touch",
          school: "Spellomancy"
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
        description: ["C"],
        duration: "Instantaneous",
        higherLevel: ["D"],
        level: 0,
        material: "A brick",
        range: "Touch",
        school: "Spellomancy",
        knownBy: ["Base Class 1", "Extra subclass"],
        aliases: [],
        pages: [
          {
            book: "Book 1",
            pageNumber: 512
          }
        ]
      },
      {
        name: "A spell",
        castingTime: "Quick",
        components: [],
        concentration: true,
        ritual: false,
        description: ["A", "B"],
        duration: "Some time",
        higherLevel: [],
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
