/**
 * The different components of a spell
 */
export type SpellComponent = "S" | "V" | "M";

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
  description: string;
  /**
   * Any additional effects from casting the spell at a higher level (empty when
   * there are no additional effect)
   */
  higherLevel: string | null;
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

/**
 * A listing of who knows which spells
 */
export interface SpellSources {
  knownBy: string;
  spells: string[];
}

/**
 * A location in a book where a spell is from
 */
export interface SourcePage {
  pageNumber: number;
  book: string;
}

/**
 * Where the spell is originally from (e.g. Player's Handbook, page 123)
 */
export interface PageData {
  spellName: string;
  page: SourcePage;
}

/**
 * Some spells have different names in different books
 */
export interface SpellAlias {
  names: string[];
}

/**
 * All of the data about a spell, collated from multiple sources
 */
export interface FullSpell extends Spell {
  knownBy: string[];
  aliases: string[];
  pages: SourcePage[];
}

/**
 * All of the data from a given source (e.g. SRD or players handbook)
 */
export interface DataSource {
  spells: Spell[];
  sources: SpellSources[];
  pages: PageData[];
  aliases: SpellAlias[];
}
