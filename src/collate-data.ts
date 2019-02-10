import { flatten, uniq, uniqBy } from "lodash";
import { DataSource, FullSpell, Spell } from "./types";

/**
 * Munge down a number of data sets into a cohearant list of spells
 */
export default function collateData(data: DataSource[]): FullSpell[] {
  const allSpells = flatten(data.map(source => source.spells));
  const sources = flatten(data.map(source => source.sources));
  const pageData = flatten(data.map(source => source.pages));
  const allAliases: string[][] = flatten(
    data.map(source => source.aliases)
  ).map(aliasList => aliasList.names);

  const baseSpells: Spell[] = uniqBy(allSpells, "name").sort(
    (a, b) => a.level - b.level || a.name.localeCompare(b.name)
  );

  if (baseSpells.length !== allSpells.length) {
    throw new Error(`Duplicate spell names present`);
  }

  return (
    baseSpells
      .map(spell => {
        const isAlias = (list: string[]) => list.indexOf(spell.name) > -1;
        const notThisSpellName = (s: string) => s !== spell.name;

        const aliases = flatten(allAliases.filter(isAlias))
          // Don't include the original name as an alias
          .filter(notThisSpellName);

        return {
          ...spell,
          aliases: uniq(aliases).sort()
        };
      })
      // Append who knows which spells
      .map(spell => {
        const names = [...spell.aliases, spell.name];

        const knownBy: string[] = sources
          .filter(source =>
            source.spells.some(spellName => names.indexOf(spellName) > -1)
          )
          .map(source => source.knownBy)
          .sort();

        return {
          ...spell,
          knownBy
        };
      })
      // Append page numbers to spells
      .map(spell => {
        const names = [...spell.aliases, spell.name];

        const spellPages = pageData
          .filter(page => names.indexOf(page.spellName) > -1)
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
