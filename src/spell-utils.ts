import { SpellSources } from "./types";

/**
 * Provide a human-readable spell level
 */
export const spellLevelName = (level: number): string =>
  level === 0 ? "Cantrip" : `Level ${level}`;

/**
 * Flip the spell source listing from a list of groupings, to a
 * spell-to-source-name mapping - Allowing for a quick lookup by spell name.
 */
export const groupSpellsKnownBySpell = (
  spellsKnown: SpellSources[]
): Record<string, string[]> => {
  return spellsKnown.reduce((bySpell: Record<string, string[]>, grouping) => {
    grouping.spells.forEach(spell => {
      bySpell[spell] = (bySpell[spell] || []).concat(grouping.knownBy);
    });

    return bySpell;
  }, {});
};
