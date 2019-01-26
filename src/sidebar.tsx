import * as React from "react";
import { colours, shadows } from "./styles";

export interface SideBarProps {
  toggleGroup: (groupName: string) => void;
  selectedGroups: string[];
  groupNames: string[];
}
export const SideBar = ({
  groupNames,
  toggleGroup,
  selectedGroups
}: SideBarProps) => {
  return (
    <div>
      <h1
        style={{
          backgroundColor: colours.spellDividerBackground,
          boxShadow: shadows.standard,
          margin: "0em 1em 0em 0.2em",
          padding: "0.2em"
        }}
      >
        Class / Subclass
      </h1>
      {groupNames.sort().map((g, i) => {
        const id = `choose-filter-${g}`;

        return (
          <div
            key={g}
            style={{
              backgroundColor: colours.cardBackground,
              fontSize: "1.3em",
              margin: "0.8em",
              padding: "0.2em",
              boxShadow: shadows.standard
            }}
          >
            <input
              id={id}
              type="checkbox"
              onChange={() => toggleGroup(g)}
              checked={selectedGroups.indexOf(g) > -1}
              style={{
                margin: "0.8em",
                transform: "scale(1.5)"
              }}
            />
            <label htmlFor={id}>{g}</label>
          </div>
        );
      })}

      <h1
        style={{
          backgroundColor: colours.spellDividerBackground,
          boxShadow: shadows.standard,
          margin: "0em 1em 0em 0.2em",
          padding: "0.2em"
        }}
      >
        <a
          href="https://media.wizards.com/2016/downloads/DND/SRD-OGL_V5.1.pdf"
          target="_blank"
        >
          SRD Link
        </a>
      </h1>
    </div>
  );
};
