import * as React from "react";
import { sourceBookText, spellComponentText } from "./spell-utils";
import { colours, shadows } from "./styles";
import { Spell } from "./types";

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
  properties: Array<[string, string]>;
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
              borderBottom: `1px solid ${colours.cardBorder}`,
              paddingRight: "1em",
              textAlign: "left"
            }}
          >
            {name}
          </th>
          <td
            style={{
              borderBottom: `1px solid ${colours.cardBorder}`,
              textAlign: "left"
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
  /**
   * Actual spell details
   */
  spell: Spell;
  /**
   * What gives someone this spell
   */
  knownBy: string[];
}
export const SpellCard = ({ spell, knownBy }: SpellCardProps) => {
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

  const sources = spell.page
    .map(page => `${sourceBookText(page.book)} page ${page.pageNumber}`)
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
        ["Source", sources],
        ["Known by", knownBy.join(", ")]
      ]}
    />
  );

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
