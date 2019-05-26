import { produce } from "immer";
import { flatten, memoize, uniq } from "lodash";
import * as React from "react";
import SmoothingSpellList from "./smoothing-spell-list";
import { collateDataSources, validateDataSource } from "./spell-data";
import SpellList from "./spell-list";
import { DataSource, FullSpell } from "./types";

interface SpellListState {
  spellData: DataSource[];
  showSidebar: "open" | "closed" | "never-opened";
  searchText: string;
  spellSourceFilter: string[];
  levelFilter: {
    min: number;
    max: number;
  };
}

const memoiseCollation = memoize(collateDataSources);

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
      showSidebar: "never-opened",
      levelFilter: {
        max: 9,
        min: 0
      }
    };
  }

  public async componentWillMount() {
    const res = await fetch("srd-data.json");
    const parsed = await res.json();
    this.loadData(parsed);
  }

  public render() {
    const allSpells = memoiseCollation(this.state.spellData);

    const spells = allSpells
      .filter(spell => spell.level <= this.state.levelFilter.max)
      .filter(spell => spell.level >= this.state.levelFilter.min)
      .filter(
        this.spellMatchesSourceFilter.bind(this, this.state.spellSourceFilter)
      )
      .filter(this.spellMatchesText.bind(this, this.state.searchText));

    const sourceNames = uniq(flatten(allSpells.map(spell => spell.knownBy)));

    // Display either the list of spells, or a placeholder loading message
    const displaySpells =
      allSpells.length > 0
        ? spells
        : [
            {
              aliases: [],
              castingTime: "Hopefully not long",
              components: [],
              concentration: true,
              description: [
                "Spell data is currently loading",
                "This should only take a few seconds."
              ],
              duration: "A few seconds",
              higherLevel: [],
              knownBy: [],
              level: 0,
              material: null,
              name: "Loading Spells...",
              pages: [],
              range: "Self",
              ritual: true,
              school: "Conjuration"
            }
          ];

    return (
      <SmoothingSpellList
        animationBatchSize={5}
        spellList={displaySpells}
        toggleSidebar={this.toggleSidebar.bind(this)}
        showSidebar={this.state.showSidebar}
        searchText={this.state.searchText}
        setSearchText={this.setSearchText.bind(this)}
        sourceNames={sourceNames}
        spellSourceFilter={this.state.spellSourceFilter}
        toggleSpellSourceFilter={this.toggleSpellSourceFilter.bind(this)}
        levelFilter={this.state.levelFilter}
        setLevelFilter={this.setLevelFilter.bind(this)}
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
        switch (draft.showSidebar) {
          case "never-opened":
          case "closed":
            draft.showSidebar = "open";
            break;
          case "open":
            draft.showSidebar = "closed";
            break;
        }
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

  private setLevelFilter(prop: "min" | "max", level: number) {
    this.setState(
      produce(this.state, draft => {
        draft.levelFilter[prop] = level;
      })
    );
  }
}
