import * as React from "react";
import { colours, shadows } from "./styles";
import { Spell, SpellSources } from "./types";

export interface SideBarProps {
  toggleSpellSource: (sourceName: string) => void;
  selectedSources: string[];
  sourceNames: string[];
  loadExtraData: (spellsToAdd: Spell[], sourcesToAdd: SpellSources[]) => void;
}
export const SideBar = ({
  sourceNames,
  toggleSpellSource,
  selectedSources,
  loadExtraData
}: SideBarProps) => {
  return (
    <div
      style={{
        overflowY: "auto",
        height: "100%"
      }}
    >
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
      {sourceNames.sort().map(g => {
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
              onChange={() => toggleSpellSource(g)}
              checked={selectedSources.indexOf(g) > -1}
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
        Load Additional Data
      </h1>
      <div
        style={{
          backgroundColor: colours.cardBackground,
          fontSize: "1.3em",
          margin: "0.8em",
          padding: "0.2em",
          boxShadow: shadows.standard
        }}
      >
        <input
          type="file"
          name="spell-data"
          onChange={e => {
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
                  const parsed = JSON.parse(data);

                  const { spells, sources } = parsed;
                  loadExtraData(spells, sources);
                }
              } catch (e) {
                // Do nothing
                // TODO - Error display
              }
            };
          }}
        />
      </div>

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
          SRD
        </a>
      </h1>
    </div>
  );
};
