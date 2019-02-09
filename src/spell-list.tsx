import { groupBy } from "lodash";
import * as React from "react";
import { SideBar } from "./sidebar";
import { SpellCard } from "./spell-card";
import { groupSpellsKnownBySpell } from "./spell-utils";
import { colours, shadows } from "./styles";
import { SourcesBySpell, Spell, SpellSources } from "./types";

interface SpellListProps {
  spellList: Spell[];
  spellsKnown: SpellSources[];
  // Showing the sidebar or not
  showSidebar: boolean;
  toggleSidebar: () => void;
  // Search filtering
  searchText: string;
  setSearchText: (text: string) => void;
  // Spell source data - Which classes/subclasses know a spell
  spellSourceFilter: string[];
  toggleSpellSourceFilter: (sourceName: string) => void;
  // Loading extra data
  loadExtraData: (spellsToAdd: Spell[], sourcesToAdd: SpellSources[]) => void;
}

/**
 * A (filtered) listing of all spells in the spell book
 */
export default class SpellList extends React.Component<SpellListProps, {}> {
  public render() {
    const { spellList, spellsKnown } = this.props;

    const groupedBySpell = groupSpellsKnownBySpell(spellsKnown);
    const spellsByLevel = groupBy(spellList, "level");

    const cardsByLevel = Object.keys(spellsByLevel).map(levelName =>
      this.renderSpellLevel(levelName, groupedBySpell, spellsByLevel[levelName])
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
          {cardsByLevel}
        </div>
      </div>
    );
  }

  /**
   * Compare two spells for sort-ordering
   */
  private compareSpells(a: Spell, b: Spell): number {
    return a.level - b.level || a.name.localeCompare(b.name);
  }

  /**
   * Provide a human-readable spell level
   */
  private spellLevelText(level: number): string {
    return level === 0 ? "Cantrip" : `Level ${level}`;
  }

  private renderSpellLevel(
    level: string,
    groupedBySpell: SourcesBySpell,
    spells: Spell[]
  ) {
    const spellCards = spells
      .sort(this.compareSpells)
      .map(spell => (
        <SpellCard
          key={spell.name}
          knownBy={
            groupedBySpell[spell.name] ? groupedBySpell[spell.name].sort() : []
          }
          spell={spell}
        />
      ));

    const levelNumber = parseInt(level, 10);
    const levelName = isNaN(levelNumber)
      ? "Unknown Level"
      : this.spellLevelText(levelNumber);

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
    if (!this.props.showSidebar) {
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
            selectedSources={this.props.spellSourceFilter}
            sourceNames={this.props.spellsKnown.map(o => o.knownBy)}
            toggleSpellSource={this.props.toggleSpellSourceFilter}
            loadExtraData={this.props.loadExtraData}
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
          onClick={this.props.toggleSidebar.bind(this)}
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
          value={this.props.searchText}
          onChange={e => this.props.setSearchText(e.target.value)}
        />
      </div>
    );
  }
}
