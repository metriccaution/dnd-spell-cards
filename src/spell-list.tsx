import { groupBy } from "lodash";
import * as React from "react";
import styled from "styled-components";
import { SideBar } from "./sidebar";
import { SpellCard } from "./spell-card";
import { groupSpellsKnownBySpell, spellLevelName } from "./spell-utils";
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

const SpellListContainer = styled.div`
  height: 100%;
  overflow-y: auto;
  color: ${colours.text};
  background: ${colours.pageBackground};
`;

const SpellListInnerContainer = styled.div`
  margin: 1em;
`;

const SpellLevelLabel = styled.h1`
  background: ${colours.spellDividerBackground};
  box-shadow: ${shadows.standard};
  padding: 0.5em;
  margin: 0em 1em;
`;

const TopBarWrapper = styled.div`
  position: sticky;
  top: 0;
  background: ${colours.topNavBackground};
  padding: 0.5em 0em;
  box-shadow: ${shadows.standard};
`;

const ToggleSidebarButton = styled.button`
  width: 5em;
  margin: 0.5em 1em;
  padding: 0.2em;
  border: 1px outset blue;
`;

const TopBarSearchBox = styled.input`
  height: 2.5em;
  margin: 0.5em 1em;
  width: 90%;
  border: none;
  padding-left: 0.2em;
`;

const SidebarContainer = styled.div`
  position: absolute;
  width: 30%;
  height: 100%;
  background-color: ${colours.topNavBackground};
  box-shadow: ${shadows.standard};
`;

const SidebarTopBarOffset = styled.div`
  padding-top: 6em;
`;

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

    // TODO - Animate sidebar transitions
    const sidebar = this.props.showSidebar ? (
      <SidebarContainer>
        <SidebarTopBarOffset>
          <SideBar
            selectedSources={this.props.spellSourceFilter}
            sourceNames={this.props.spellsKnown.map(o => o.knownBy)}
            toggleSpellSource={this.props.toggleSpellSourceFilter}
            loadExtraData={this.props.loadExtraData}
          />
        </SidebarTopBarOffset>
      </SidebarContainer>
    ) : null;

    return (
      <SpellListContainer>
        {sidebar}

        <TopBarWrapper>
          <ToggleSidebarButton onClick={this.props.toggleSidebar.bind(this)}>
            Sidebar
          </ToggleSidebarButton>
          <TopBarSearchBox
            placeholder={"Search"}
            value={this.props.searchText}
            onChange={e => this.props.setSearchText(e.target.value)}
          />
        </TopBarWrapper>

        <SpellListInnerContainer>{cardsByLevel}</SpellListInnerContainer>
      </SpellListContainer>
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
      : spellLevelName(levelNumber);

    return (
      <div key={level}>
        <SpellLevelLabel>{levelName}</SpellLevelLabel>
        <SpellListInnerContainer>{spellCards}</SpellListInnerContainer>
      </div>
    );
  }
}
