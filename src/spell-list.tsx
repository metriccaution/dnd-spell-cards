import * as React from "react";
import styled from "styled-components";
import { SideBar } from "./sidebar";
import { SpellCard } from "./spell-card";
import { colours, shadows } from "./styles";
import { DataSource, FullSpell } from "./types";

interface SpellListProps {
  spellList: FullSpell[];
  // Showing the sidebar or not
  showSidebar: boolean;
  toggleSidebar: () => void;
  // Search filtering
  searchText: string;
  setSearchText: (text: string) => void;
  // Spell source data - Which classes/subclasses know a spell
  sourceNames: string[];
  spellSourceFilter: string[];
  toggleSpellSourceFilter: (sourceName: string) => void;
  // Loading extra data
  loadExtraData: (data: DataSource) => void;
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
  background-color: ${colours.pageBackground};
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
    const { sourceNames, spellList } = this.props;

    // TODO - Animate sidebar transitions
    const sidebar = this.props.showSidebar ? (
      <SidebarContainer>
        <SidebarTopBarOffset>
          <SideBar
            selectedSources={this.props.spellSourceFilter}
            sourceNames={sourceNames}
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

        {spellList.map(spell => (
          <SpellCard key={spell.name} spell={spell} />
        ))}

        <SpellListInnerContainer>{}</SpellListInnerContainer>
      </SpellListContainer>
    );
  }
}
