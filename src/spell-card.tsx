import * as React from "react";
import styled from "styled-components";
import PropertiesGrid from "./properties-grid";
import { colours, shadows } from "./styles";
import { FullSpell, SpellComponent } from "./types";

const DescriptionBlock = styled.div`
  padding-top: 0.4em;
`;

const CardPanel = styled.div`
  margin: 2em;
  padding: 0.75em;
  width: 30em;
  display: inline-block;
  vertical-align: top;
  background: ${colours.cardBackground};
  box-shadow: ${shadows.standard};
  border: 2px solid ${colours.cardBorder};
`;

const SpellTitle = styled.h2`
  margin-top: 0;
`;

/**
 * Provide a human-readable spell level
 */
const spellLevelName = (level: number): string =>
  level === 0 ? "Cantrip" : `Level ${level}`;

/**
 * Human-readable source books
 */
export const sourceBookText = (sourceBook: string): string => {
  switch (sourceBook) {
    // Freely avaliable content
    case "phb":
      return "Player's Handbook";
    case "srd":
      return "System Reference Document";
    // Not bundled in the code, as these are proprietary, but render properly
    // if someone loads some extra local resources
    case "scag":
      return "Sword Coast Adventurer's Guide";
    case "xgte":
      return "Xanathar's Guide to Everything";
    case "ee":
      return "Elemental Evil";
    // Fallback
    default:
      return sourceBook || "Unknown";
  }
};

/**
 * Render out component initials to actual words
 */
export const spellComponentText = (component: SpellComponent): string => {
  switch (component) {
    case "V":
      return "Verbal";
    case "S":
      return "Somatic";
    case "M":
      return "Material";
    default:
      return component;
  }
};

export interface SpellCardProps {
  /**
   * Actual spell details
   */
  spell: FullSpell;
}
export const SpellCard = ({ spell }: SpellCardProps) => {
  const spellComponents = spell.components
    .map(spellComponentText)
    .sort()
    .join(", ");

  const sources = spell.pages
    .map(page => `${sourceBookText(page.book)} page ${page.pageNumber}`)
    .map((text, index) => <div key={index}>{text}</div>);

  const knownByList = spell.knownBy.sort().map(k => <div key={k}>{k}</div>);

  const description = [
    {
      lines: spell.description,
      title: "Description"
    },
    {
      lines: spell.higherLevel,
      title: "At a higher level"
    }
  ]
    .filter(({ lines }) => lines.length > 0)
    .map(props => {
      const descriptionLines = props.lines.map((line, index) => (
        <DescriptionBlock key={index}>{line}</DescriptionBlock>
      ));

      return (
        <div>
          <h3>{props.title}</h3>
          {descriptionLines}
        </div>
      );
    });

  return (
    <CardPanel>
      <SpellTitle>{spell.name}</SpellTitle>
      <PropertiesGrid
        properties={[
          ["Level", spellLevelName(spell.level)],
          ["School", spell.school],
          ["Range", spell.range],
          ["Casting Time", spell.castingTime],
          ["Duration", spell.duration],
          ["Components", spellComponents],
          ["Materials", spell.material === null ? "None" : spell.material],
          ["Ritual", spell.ritual ? "Yes" : "No"],
          ["Concentration", spell.concentration ? "Yes" : "No"],
          ["Page", <div>{sources}</div>],
          ["Known by", <div>{knownByList}</div>]
        ]}
      />
      {description}
    </CardPanel>
  );
};
