import { produce } from "immer";
import * as React from "react";
// Raw data imports
import { spells } from "./data/spells";
import { spellsKnown } from "./data/spells-known";
import SpellList from "./spell-list";
import { groupSpellsKnownBySpell } from "./spell-utils";
import { Spell, SpellGrouping, SpellsKnown } from "./types";

interface SpellListState {
  spells: Spell[];
  spellsKnown: SpellsKnown[];
  showSidebar: boolean;
  searchText: string;
  groupFilter: string[];
}

/**
 * State container
 */
export default class MainPage extends React.Component<{}, SpellListState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      spells,
      spellsKnown,
      searchText: "",
      groupFilter: [],
      showSidebar: false
    };
  }

  public render() {
    const groupedBySpell = groupSpellsKnownBySpell(this.state.spellsKnown);

    const matchingSpells = this.state.spells
      .filter(this.spellMatchesText.bind(this, this.state.searchText))
      .filter(
        this.spellMatchesGroupFilter.bind(
          this,
          this.state.groupFilter,
          groupedBySpell
        )
      );

    return (
      <SpellList
        spellList={matchingSpells}
        spellsKnown={this.state.spellsKnown}
        toggleSidebar={this.toggleSidebar.bind(this)}
        showSidebar={this.state.showSidebar}
        searchText={this.state.searchText}
        setSearchText={this.setSearchText.bind(this)}
        groupFilter={this.state.groupFilter}
        toggleGroupFilter={this.toggleGroupFilter.bind(this)}
      />
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
}
