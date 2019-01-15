import { SourceBook, SpellComponent, SpellsKnown } from "./types";

/**
 * Render out component initials to actual words
 */
export const spellComponentText = (component: SpellComponent): string => {
  switch (component) {
    case "V":
      return "Verbal";
    case "S":
      return "Somatic";
    case "M":
      return "Material";
    default:
      return "";
  }
};

/**
 * Human-readable source books
 */
export const sourceBookText = (sourceBook: SourceBook): string => {
  switch (sourceBook) {
    // Freely avaliable content
    case "phb":
      return "Player's Handbook";
    case "srd":
      return "System Reference Document";
    // Not bundled in the code, as these are proprietary, but render properly
    case "scag":
      return "Sword Coast Adventurer's Guide";
    case "xgte":
      return "Xanathar's Guide to Everything";
    case "ee":
      return "Elemental Evil";
    // Fallback
    default:
      return "Unknown";
  }
};

/**
 * Provide a human-readable spell level
 */
export const spellLevelText = (level: number): string =>
  level === 0 ? "Cantrip" : `Level ${level}`;

/**
 * Flip the spells known listing from a list of groupings, to a
 * spell-to-grouping-name mapping - Allowing for a quick lookup
 */
export const groupSpellsKnownBySpell = (
  spellsKnown: SpellsKnown[]
): Record<string, string[]> => {
  return spellsKnown.reduce((bySpell: Record<string, string[]>, grouping) => {
    grouping.spells.forEach(spell => {
      bySpell[spell] = (bySpell[spell] || []).concat(grouping.knownBy);
    });

    return bySpell;
  }, {});
};
