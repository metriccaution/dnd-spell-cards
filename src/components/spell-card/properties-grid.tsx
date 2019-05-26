import * as React from "react";
import styled from "styled-components";
import { colours } from "../../styles";

const PropertiesRow = styled.tr`
  padding: 0.5;
`;

const PropertyTitle = styled.th`
  border-bottom: 1px solid ${colours.cardBorder};
  padding-right: 1em;
  text-align: left;
`;

const PropertyValue = styled.td`
  border-bottom: 1px solid ${colours.cardBorder};
  text-align: left;
`;

export interface PropertiesGridProps {
  properties: Array<[string, JSX.Element | string | null]>;
}

const PropertiesGrid = ({ properties }: PropertiesGridProps) => {
  return (
    <table>
      {properties
        .filter(prop => prop[1] !== null)
        .map(([name, value]) => (
          <PropertiesRow>
            <PropertyTitle>{name}</PropertyTitle>
            <PropertyValue>{value}</PropertyValue>
          </PropertiesRow>
        ))}
    </table>
  );
};

export default PropertiesGrid;
