/*
 * Check that the names of spells actually line up properly
 */

const { values, flatten, uniq } = require("lodash");

const spellsKnown = uniq(flatten(values(require("../spells-known.json"))));
const spells = uniq(require("../spells.json").map(s => s.name));

console.log(spellsKnown.length, spells.length);
console.log(spellsKnown.filter(s => spells.indexOf(s) === -1));
console.log(spells.filter(s => spellsKnown.indexOf(s) === -1));
