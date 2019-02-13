import { produce } from "immer";
import { memoize } from "lodash";
import * as React from "react";
import collateSpells from "./collate-data";
import data from "./data";
import validateDataSource from "./data-schemas";
import SpellList from "./spell-list";
import { DataSource, FullSpell } from "./types";

interface SpellListState {
  spellData: DataSource[];
  showSidebar: boolean;
  searchText: string;
  spellSourceFilter: string[];
}

const memoiseCollation = memoize(collateSpells);

/**
 * State container
 */
export default class MainPage extends React.Component<{}, SpellListState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      spellData: [],
      searchText: "",
      spellSourceFilter: [],
      showSidebar: false
    };
  }

  public componentWillMount() {
    this.loadData(data);
  }

  public render() {
    const spells = memoiseCollation(this.state.spellData)
      .filter(
        this.spellMatchesSourceFilter.bind(this, this.state.spellSourceFilter)
      )
      .filter(this.spellMatchesText.bind(this, this.state.searchText));

    return (
      <SpellList
        spellList={spells}
        toggleSidebar={this.toggleSidebar.bind(this)}
        showSidebar={this.state.showSidebar}
        searchText={this.state.searchText}
        setSearchText={this.setSearchText.bind(this)}
        spellSourceFilter={this.state.spellSourceFilter}
        toggleSpellSourceFilter={this.toggleSpellSourceFilter.bind(this)}
        loadExtraData={this.loadData.bind(this)}
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
  private spellMatchesText(text: string, spell: FullSpell): boolean {
    const searchTerm = text.toLowerCase();
    const matchesString = (toMatch: string) =>
      toMatch.toLowerCase().indexOf(searchTerm) > -1;

    return (
      matchesString(spell.name) ||
      spell.aliases.some(matchesString) ||
      spell.description.some(matchesString)
    );
  }

  /**
   * Does a spell match the selected groups
   */
  private spellMatchesSourceFilter(
    selectedGroups: string[],
    spell: FullSpell
  ): boolean {
    return (
      !Boolean(selectedGroups.length) ||
      spell.knownBy.some(knownBy => selectedGroups.indexOf(knownBy) > -1)
    );
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
   * Load up a new data set into the app
   */
  private loadData(source: DataSource) {
    validateDataSource(source);

    this.setState(
      produce(this.state, draft => {
        draft.spellData.push(source);
      })
    );
  }
}
