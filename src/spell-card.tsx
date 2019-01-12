import * as React from "react";
import { Spell } from "./spells";
import { colours, shadows } from "./styles";
import { sourceBookText, spellComponentText } from "./spell-utils";

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
      <h3>{title}</h3>
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
      <h2
        style={{
          marginTop: 0
        }}
      >
        {spell.name}
      </h2>
      {components}
      {description}
    </div>
  );
};
