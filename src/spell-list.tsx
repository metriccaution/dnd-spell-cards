import { produce } from "immer";
import { groupBy } from "lodash";
import * as React from "react";
import { SpellCard } from "./spell-card";
import { spellLevelText } from "./spell-utils";
import { colours, shadows } from "./styles";
import { Spell, SpellsKnown } from "./types";

interface SpellListProps {
  spellList: Spell[];
  spellsKnown: SpellsKnown[];
}
interface SpellListState {
  searchText: string;
}

/**
 * A (filtered) listing of all spells in the spell book
 */
export default class SpellList extends React.Component<
  SpellListProps,
  SpellListState
> {
  constructor(props: SpellListProps) {
    super(props);
    this.state = {
      searchText: ""
    };
  }

  public render() {
    const matchingSpells = this.props.spellList.filter(
      this.spellMatchesText.bind(this, this.state.searchText)
    );

    const spellGroups = groupBy(matchingSpells, "level");

    const groupedCards = Object.keys(spellGroups).map(groupName =>
      this.renderSpellLevel(groupName, spellGroups[groupName])
    );

    return (
      <div
        style={{
          height: "100%",
          overflowY: "auto",
          color: colours.text,
          backgroundColor: colours.pageBackground
        }}
      >
        <div
          style={{
            position: "sticky",
            top: 0,
            backgroundColor: colours.topNavBackground,
            padding: "0.5em 0em",
            boxShadow: shadows.standard
          }}
        >
          <input
            style={{
              height: "2.5em",
              width: "96%",
              border: "none",
              margin: "0% 2%",
              paddingLeft: "1em"
            }}
            placeholder={"Search"}
            value={this.state.searchText}
            onChange={e => this.setSearchText(e.target.value)}
          />
        </div>

        <div
          style={{
            margin: "1em"
          }}
        >
          {groupedCards}
        </div>
      </div>
    );
  }

  /**
   * Does a spell match a text value.
   */
  private spellMatchesText(text: string, spell: Spell): boolean {
    const searchTerm = text.toLowerCase();
    const matchesString = (toMatch: string) =>
      toMatch.toLowerCase().indexOf(searchTerm) > -1;

    return matchesString(spell.name) || spell.description.some(matchesString);
  }

  /**
   * Update the current search value
   */
  private setSearchText(searchText: string) {
    this.setState(
      produce(this.state, draft => {
        draft.searchText = searchText;
      })
    );
  }

  /**
   * Compare two spells for sort-ordering
   */
  private compareSpells(a: Spell, b: Spell): number {
    return a.level - b.level || a.name.localeCompare(b.name);
  }

  /**
   * Flip the spells known listing from a list of groupings, to a
   * spell-to-grouping-name mapping - Allowing for a quick lookup
   */
  private groupSpellsKnownBySpell(): Record<string, string[]> {
    return this.props.spellsKnown.reduce(
      (bySpell: Record<string, string[]>, grouping) => {
        grouping.spells.forEach(spell => {
          bySpell[spell] = (bySpell[spell] || []).concat(grouping.knownBy);
        });

        return bySpell;
      },
      {}
    );
  }

  private renderSpellLevel(level: string, spells: Spell[]) {
    const groupedBySpell = this.groupSpellsKnownBySpell();

    const spellCards = spells
      .sort(this.compareSpells)
      .map(spell => (
        <SpellCard
          key={spell.name}
          knownBy={groupedBySpell[spell.name].sort() || []}
          spell={spell}
        />
      ));

    const levelNumber = parseInt(level, 10);
    const levelName = isNaN(levelNumber)
      ? "Unknown Level"
      : spellLevelText(levelNumber);

    return (
      <div key={level}>
        <h1
          style={{
            backgroundColor: colours.spellDividerBackground,
            boxShadow: shadows.standard,
            padding: "0.5em",
            margin: "0em 1em"
          }}
        >
          {levelName}
        </h1>
        <div
          style={{
            margin: "0.25em"
          }}
        >
          {spellCards}
        </div>
      </div>
    );
  }
}
