import * as React from "react";
import { Spring } from "react-spring/renderprops";
import styled from "styled-components";
import { SideBar } from "../../components/sidebar";
import { SpellCard } from "../../components/spell-card";
import { colours, shadows, sizes } from "../../styles";
import { DataSource, FullSpell } from "../../types";

export interface SpellListProps {
  spellList: FullSpell[];
  // Showing the sidebar or not
  showSidebar: "open" | "closed" | "never-opened";
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
  // Setting the min / max spell level
  levelFilter: {
    min: number;
    max: number;
  };
  setLevelFilter: (prop: "min" | "max", level: number) => void;
}

const SpellListContainer = styled.div`
  height: 100%;
  color: ${colours.text};
  background: ${colours.pageBackground};
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
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
  overflow-y: auto;
`;

const SidebarTopBarOffset = styled.div`
  padding-top: 6em;
`;

const SpellContainer = styled.div``;

const sidebarFromWidth = (state: "open" | "closed" | "never-opened") => {
  switch (state) {
    case "open":
    case "never-opened":
      return 0;
    case "closed":
      return sizes.sidebarPercentageWidth;
    default:
      throw new Error(`Unknown sidebar state ${state}`);
  }
};

const sidebarToWidth = (state: "open" | "closed" | "never-opened") => {
  switch (state) {
    case "closed":
    case "never-opened":
      return 0;
    case "open":
      return sizes.sidebarPercentageWidth;
    default:
      throw new Error(`Unknown sidebar state ${state}`);
  }
};

/**
 * A (filtered) listing of all spells in the spell book
 */
export default class SpellList extends React.Component<SpellListProps, {}> {
  public render() {
    const {
      sourceNames,
      spellList,
      levelFilter,
      setLevelFilter,
      showSidebar
    } = this.props;

    const sidebar = (
      <Spring
        from={{ width: sidebarFromWidth(showSidebar) }}
        to={{ width: sidebarToWidth(showSidebar) }}
      >
        {props => (
          <SidebarContainer
            style={{
              width: `${props.width}%`
            }}
          >
            <SidebarTopBarOffset>
              <SideBar
                selectedSources={this.props.spellSourceFilter}
                sourceNames={sourceNames}
                toggleSpellSource={this.props.toggleSpellSourceFilter}
                loadExtraData={this.props.loadExtraData}
                levelFilter={levelFilter}
                setLevelFilter={setLevelFilter}
              />
            </SidebarTopBarOffset>
          </SidebarContainer>
        )}
      </Spring>
    );

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

        <SpellContainer>
          {spellList.map(spell => (
            <SpellCard key={spell.name} spell={spell} />
          ))}
        </SpellContainer>
      </SpellListContainer>
    );
  }
}
