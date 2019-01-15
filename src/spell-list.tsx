import { produce } from "immer";
import { groupBy } from "lodash";
import * as React from "react";
import { SideBar } from "./sidebar";
import { SpellCard } from "./spell-card";
import { groupSpellsKnownBySpell, spellLevelText } from "./spell-utils";
import { colours, shadows } from "./styles";
import { Spell, SpellsKnown } from "./types";

interface SpellListProps {
  spellList: Spell[];
  spellsKnown: SpellsKnown[];
}
interface SpellListState {
  showSidebar: boolean;
  searchText: string;
  groupFilter: string[];
}

/**
 * Alias for a spell name to class mapping
 */
type SpellGrouping = Record<string, string[]>;

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
      searchText: "",
      groupFilter: [],
      showSidebar: false
    };
  }

  public render() {
    const groupedBySpell = groupSpellsKnownBySpell(this.props.spellsKnown);

    const matchingSpells = this.props.spellList
      .filter(this.spellMatchesText.bind(this, this.state.searchText))
      .filter(
        this.spellMatchesGroupFilter.bind(
          this,
          this.state.groupFilter,
          groupedBySpell
        )
      );

    const spellGroups = groupBy(matchingSpells, "level");

    const groupedCards = Object.keys(spellGroups).map(groupName =>
      this.renderSpellLevel(groupName, groupedBySpell, spellGroups[groupName])
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
        {this.renderSidebar()}
        {this.renderTopBar()}

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

  private toggleGroupFilter(groupName: string) {
    this.setState(
      produce(this.state, draft => {
        draft.groupFilter =
          draft.groupFilter.indexOf(groupName) > -1
            ? draft.groupFilter.filter(group => group !== groupName)
            : draft.groupFilter.concat(groupName);
      })
    );
  }

  private toggleSidebar() {
    this.setState(
      produce(this.state, draft => {
        draft.showSidebar = !draft.showSidebar;
      })
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
   * Does a spell match the selected groups
   */
  private spellMatchesGroupFilter(
    selectedGroups: string[],
    groupedBySpell: SpellGrouping,
    spell: Spell
  ): boolean {
    if (selectedGroups.length === 0) {
      return true;
    }

    const spellKnownBy = groupedBySpell[spell.name];
    return spellKnownBy.some(knownBy => selectedGroups.indexOf(knownBy) > -1);
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

  private renderSpellLevel(
    level: string,
    groupedBySpell: SpellGrouping,
    spells: Spell[]
  ) {
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

  private renderSidebar() {
    // TODO - Animate this
    if (!this.state.showSidebar) {
      return null;
    }

    return (
      <div
        style={{
          position: "absolute",
          width: "30%",
          height: "100%",
          backgroundColor: colours.topNavBackground,
          boxShadow: shadows.standard
        }}
      >
        <div
          style={{
            paddingTop: "6em"
          }}
        >
          <SideBar
            selectedGroups={this.state.groupFilter}
            groupNames={this.props.spellsKnown.map(o => o.knownBy)}
            toggleGroup={this.toggleGroupFilter.bind(this)}
          />
        </div>
      </div>
    );
  }

  private renderTopBar() {
    return (
      <div
        style={{
          position: "sticky",
          top: 0,
          backgroundColor: colours.topNavBackground,
          padding: "0.5em 0em",
          boxShadow: shadows.standard
        }}
      >
        <button
          onClick={this.toggleSidebar.bind(this)}
          style={{
            width: "5em",
            margin: "0.5em 1em",
            padding: "0.2em",
            border: "1px outset blue"
          }}
        >
          Sidebar
        </button>
        <input
          style={{
            height: "2.5em",
            margin: "0.5em 1em",
            width: "90%",
            border: "none",
            paddingLeft: "0.2em"
          }}
          placeholder={"Search"}
          value={this.state.searchText}
          onChange={e => this.setSearchText(e.target.value)}
        />
      </div>
    );
  }
}
