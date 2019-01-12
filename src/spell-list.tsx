import * as React from "react";
import { Spell } from "./spells";
import { produce } from "immer";
import { SpellCard } from "./spell-card";
import { colours, shadows } from "./styles";
import { groupBy } from "lodash";
import { spellLevelText } from "./spell-utils";

interface SpellListProps {
  spellList: Spell[];
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

  private renderSpellLevel(level: string, spells: Spell[]) {
    const spellCards = spells
      .sort(this.compareSpells)
      .map(spell => <SpellCard key={spell.name} spell={spell} />);

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
              width: "96%",
              border: "none",
              margin: "0% 2%"
            }}
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
}
