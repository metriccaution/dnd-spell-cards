import * as React from "react";
import { Spell, SpellComponent, SourceBook } from "./spells";
import { colours, shadows } from "./styles";

/**
 * Render out component initials to actual words
 */
const spellComponentText = (component: SpellComponent): string => {
  switch (component) {
    case "V":
      return "Verbal";
    case "S":
      return "Somatic";
    case "M":
      return "Material";
    default:
      return "";
  }
};

/**
 * Human-readable source books
 */
const sourceBookText = (sourceBook: SourceBook): string => {
  switch (sourceBook) {
    // Freely avaliable content
    case "phb":
      return "Player's Handbook";
    case "srd":
      return "System Reference Document";
    // Not bundled in the code, as these are proprietary, but render properly
    case "scag":
      return "Sword Coast Adventurer's Guide";
    case "xgte":
      return "Xanathar's Guide to Everything";
    case "ee":
      return "Elemental Evil";
    // Fallback
    default:
      return "Unknown";
  }
};

/*
 *
 */

interface DescriptionBlockProps {
  text: string;
}
const DescriptionBlock = ({ text }: DescriptionBlockProps) => {
  const descriptionItemStyles = {
    paddingTop: "0.4em"
  };
  return <div style={descriptionItemStyles}>{text}</div>;
};

interface TextBlockProps {
  title: string;
  lines: string[];
}
const TextBlock = ({ title, lines }: TextBlockProps) => {
  const description = lines.map((line, index) => (
    <DescriptionBlock key={index} text={line} />
  ));

  return (
    <div>
      <h2>{title}</h2>
      {description}
    </div>
  );
};

/*
 *
 */

interface PropertiesListProps {
  properties: [string, string][];
}
const PropertiesList = ({ properties }: PropertiesListProps) => {
  return (
    <table>
      {properties.map(([name, value]) => (
        <tr
          style={{
            padding: "0.5em"
          }}
        >
          <th
            style={{
              textAlign: "left",
              paddingRight: "1em",
              borderBottom: `1px solid ${colours.cardBorder}`
            }}
          >
            {name}
          </th>
          <td
            style={{
              textAlign: "left",
              borderBottom: `1px solid ${colours.cardBorder}`
            }}
          >
            {value}
          </td>
        </tr>
      ))}
    </table>
  );
};

/*
 *
 */

export interface SpellCardProps {
  spell: Spell;
}
export const SpellCard = ({ spell }: SpellCardProps) => {
  const cardStyles = {
    margin: "1em",
    width: "35em",
    padding: "0.75em",
    display: "inline-block",
    verticalAlign: "top",
    backgroundColor: colours.cardBackground,
    boxShadow: shadows.standard,
    border: `2px solid ${colours.cardBorder}`
  };

  const spellLevel = spell.level === 0 ? "Cantrip" : `Level ${spell.level}`;
  const spellComponents = spell.components
    .map(spellComponentText)
    .filter(Boolean)
    .sort()
    .join(", ");

  const components = (
    <PropertiesList
      properties={[
        ["Level", spellLevel],
        ["School", spell.school],
        ["Range", spell.range],
        ["Casting Time", spell.castingTime],
        ["Duration", spell.duration],
        ["Components", spellComponents],
        ["Materials", spell.material === null ? "None" : spell.material],
        ["Ritual", spell.ritual ? "Yes" : "No"],
        ["Concentration", spell.concentration ? "Yes" : "No"],
        [
          "Source",
          `${sourceBookText(spell.page.book)} page ${spell.page.pageNumber}`
        ]
      ]}
    />
  );

  const description = [
    {
      title: "Description",
      lines: spell.description
    },
    {
      title: "At a higher level",
      lines: spell.higherLevel
    }
  ]
    .filter(({ lines }) => lines.length > 0)
    .map(props => <TextBlock key={props.title} {...props} />);

  return (
    <div style={cardStyles}>
      <h1
        style={{
          marginTop: 0
        }}
      >
        {spell.name}
      </h1>
      {components}
      {description}
    </div>
  );
};
