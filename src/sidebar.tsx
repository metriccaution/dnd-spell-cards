import * as React from "react";
import styled from "styled-components";
import { colours, shadows } from "./styles";
import { DataSource } from "./types";

const SidebarScrollContainer = styled.div`
  overflow-y: auto;
  height: 100%;
`;

const SidebarHeading = styled.h1`
  box-shadow: ${shadows.standard};
  background: ${colours.spellDividerBackground};
  font-size: 1em;
  margin: 1em;
  padding: 0.8em;
`;

const SidebarItem = styled.div`
  box-shadow: ${shadows.standard};
  background: ${colours.cardBackground};
  font-size: 1em;
  margin: 1em;
  padding: 0.2em;
`;

const ClassCheckbox = styled.input`
  margin: 0.8em;
  transform: scale(1.5);
`;

export interface SideBarProps {
  toggleSpellSource: (sourceName: string) => void;
  selectedSources: string[];
  sourceNames: string[];
  loadExtraData: (data: DataSource) => void;
}

export const SideBar = ({
  sourceNames,
  toggleSpellSource,
  selectedSources,
  loadExtraData
}: SideBarProps) => {
  /**
   * Handle uploading bonus data
   */
  const handleFileUpload = (e: any) => {
    // TODO - Document how the data should be structured for this
    // TODO - Look into how this works with browser compatibility
    const files = e.target.files;
    if (!files || files.length !== 1) {
      return;
    }

    const file = files[0];

    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      try {
        const data = reader.result;
        if (typeof data === "string") {
          const parsed: DataSource = JSON.parse(data);
          // TODO - Validate the data in here
          loadExtraData(parsed);
        }
      } catch (e) {
        // Do nothing
        // TODO - Error display
      }
    };
  };

  return (
    <SidebarScrollContainer>
      <SidebarHeading>Class / Subclass</SidebarHeading>
      {sourceNames.sort().map(g => {
        const id = `choose-filter-${g}`;

        return (
          <SidebarItem key={id}>
            <ClassCheckbox
              id={id}
              type="checkbox"
              onChange={() => toggleSpellSource(g)}
              checked={selectedSources.indexOf(g) > -1}
            />
            <label htmlFor={id}>{g}</label>
          </SidebarItem>
        );
      })}

      <SidebarHeading>Load Additional Data</SidebarHeading>
      <SidebarItem>
        <input type="file" name="spell-data" onChange={handleFileUpload} />
      </SidebarItem>

      <SidebarHeading>Helpful Links</SidebarHeading>
      <SidebarItem>
        <a
          href="https://media.wizards.com/2016/downloads/DND/SRD-OGL_V5.1.pdf"
          target="_blank"
        >
          SRD
        </a>
      </SidebarItem>
    </SidebarScrollContainer>
  );
};
