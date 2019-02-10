import { flatten, uniqBy } from "lodash";
import { DataSource, FullSpell, Spell } from "./types";

/**
 * Munge down a number of data sets into a cohearant list of spells
 */
export default function collateData(data: DataSource[]): FullSpell[] {
  const allSpells = flatten(data.map(source => source.spells));
  const sources = flatten(data.map(source => source.sources));
  const pageData = flatten(data.map(source => source.pages));

  const baseSpells: Spell[] = uniqBy(allSpells, "name").sort(
    (a, b) => a.level - b.level || a.name.localeCompare(b.name)
  );

  if (baseSpells.length !== allSpells.length) {
    throw new Error(`Duplicate spell names present`);
  }

  return (
    baseSpells
      .map(spell => {
        // TODO - Aliases from data source
        const aliases: string[] = [];
        return {
          ...spell,
          aliases
        };
      })
      // Append who knows which spells
      .map(spell => {
        // TODO - Also look up by alias
        const knownBy: string[] = sources
          .filter(source => source.spells.indexOf(spell.name) > -1)
          .map(source => source.knownBy)
          .sort();

        return {
          ...spell,
          knownBy
        };
      })
      // Append page numbers to spells
      .map(spell => {
        // TODO - Also look up by alias
        const spellPages = pageData
          .filter(page => page.spellName === spell.name)
          .map(page => page.page)
          .sort(
            (a, b) =>
              a.book.localeCompare(b.book) || a.pageNumber - b.pageNumber
          );

        return {
          ...spell,
          pages: spellPages
        };
      })
  );
}
