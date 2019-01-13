/*
 * Parse the list of which classes know which spells
 */
const { readFileSync, writeFileSync } = require("fs");

const rawText = readFileSync(__dirname + "/data/known-by-class.txt", "utf8");

const classes = rawText
  .split("\n")
  .map(l => l.replace(/ +/g, " "))
  .map(l => l.trim())
  .filter(Boolean);

// Split out the lines by class
const linesByClass = classes.reduce(
  (classMap, line) => {
    if (line.endsWith(" Spells")) {
      const className = line
        .split(" Spells")
        .join("")
        .trim();
      classMap.currentClass = className;
    } else {
      classMap.classSpells[classMap.currentClass] = (
        classMap.classSpells[classMap.currentClass] || []
      ).concat(line);
    }

    return classMap;
  },
  {
    currentClass: "No Class",
    classSpells: {}
  }
).classSpells;

const parseSpellList = lines => lines.filter(line => !/\d.+Level/.test(line));

const byClass = Object.keys(linesByClass).reduce((spellsByClass, className) => {
  spellsByClass[className] = parseSpellList(linesByClass[className]);
  return spellsByClass;
}, {});

writeFileSync(
  __dirname + "/../spells-known.json",
  JSON.stringify(byClass, null, 4),
  "utf8"
);
