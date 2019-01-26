import { produce } from "immer";
import * as React from "react";
import { spellSources } from "./data/spell-sources";
import { spells } from "./data/spells";
import SpellList from "./spell-list";
import { groupSpellsKnownBySpell } from "./spell-utils";
import { SourcesBySpell, Spell, SpellSources } from "./types";

interface SpellListState {
  spells: Spell[];
  spellSources: SpellSources[];
  showSidebar: boolean;
  searchText: string;
  spellSourceFilter: string[];
}

/**
 * State container
 */
export default class MainPage extends React.Component<{}, SpellListState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      spells,
      spellSources,
      searchText: "",
      spellSourceFilter: [],
      showSidebar: false
    };
  }

  public render() {
    const groupedBySpell = groupSpellsKnownBySpell(this.state.spellSources);

    const matchingSpells = this.state.spells
      .filter(this.spellMatchesText.bind(this, this.state.searchText))
      .filter(
        this.spellMatchesSourceFilter.bind(
          this,
          this.state.spellSourceFilter,
          groupedBySpell
        )
      );

    return (
      <SpellList
        spellList={matchingSpells}
        spellsKnown={this.state.spellSources}
        toggleSidebar={this.toggleSidebar.bind(this)}
        showSidebar={this.state.showSidebar}
        searchText={this.state.searchText}
        setSearchText={this.setSearchText.bind(this)}
        spellSourceFilter={this.state.spellSourceFilter}
        toggleSpellSourceFilter={this.toggleSpellSourceFilter.bind(this)}
      />
    );
  }

  /**
   * Toggle filtering by a particular spell source
   */
  private toggleSpellSourceFilter(groupName: string) {
    this.setState(
      produce(this.state, draft => {
        draft.spellSourceFilter =
          draft.spellSourceFilter.indexOf(groupName) > -1
            ? draft.spellSourceFilter.filter(group => group !== groupName)
            : draft.spellSourceFilter.concat(groupName);
      })
    );
  }

  /**
   * Open/close the sidebar
   */
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
  private spellMatchesSourceFilter(
    selectedGroups: string[],
    groupedBySpell: SourcesBySpell,
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
