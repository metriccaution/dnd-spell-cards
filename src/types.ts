/**
 * The different components of a spell
 */
export type SpellComponent = "S" | "V" | "M";

/**
 * Known source books
 */
export type SourceBook = "phb" | "srd" | "scag" | "xgte" | "ee";

/**
 * Alias for a spell name to class mapping
 */
export type SpellGrouping = Record<string, string[]>;

/**
 * A location in a book where a spell is from
 */
export interface SourcePage {
  pageNumber: number;
  book: SourceBook;
}

/**
 * All of the details stored about a spell.
 */
export interface Spell {
  /**
   * The name of this spell
   */
  name: string;
  /**
   * A description of what this spell does
   */
  description: string[];
  /**
   * Any additional effects from casting the spell at a higher level (empty when
   * there are no additional effect)
   */
  higherLevel: string[];
  /**
   * Where the spell is originally from (e.g. Player's Handbook, page 123)
   */
  page: SourcePage[];
  /**
   * How far will the spell reach
   */
  range: string;
  /**
   * The various components to spell casting required for this spell
   */
  components: SpellComponent[];
  /**
   * What materials does the spell need
   */
  material: string | null;
  /**
   * Can this spell be cast as a ritual
   */
  ritual: boolean;
  /**
   * Does this spell require concentration
   */
  concentration: boolean;
  /**
   * How long does the spell last once it's been cast
   */
  duration: string;
  /**
   * How long does this spell take to cast
   */
  castingTime: string;
  /**
   * What school of magic does this spell belong to
   */
  school: string;
  /**
   * The level of this spell - 0-9 (with 0 being a cantrip)
   */
  level: number;
}

export interface SpellsKnown {
  knownBy: string;
  spells: string[];
}
