import React from "react";

import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import {Container, Button, Col, Panel,Thead,TableBasic,Tbody,Tr,Td,Th} from 'fantastic-components';

const Red = props => <span style={{ color: "red" }} {...props} />;

const TableComponent = ({ propDefinitions }) => {
  const props = propDefinitions.map(
    ({ property, propType, required, description, defaultValue }) => {
      return (
        <tr key={property}>
          <Td>
            {property}
            {required ? <Red>*</Red> : null}
          </Td>
          <Td>{propType.name}</Td>
          <Td>{defaultValue}</Td>
          <Td>{description}</Td>
        </tr>
      );
    }
  );

  return (
    <TableBasic>
      <Thead>
      <tr>
        <Th>name</Th>
        <Th>type</Th>
        <Th>default</Th>
        <Th>description</Th>
      </tr>
      </Thead>
      <Tbody>{props}</Tbody>
    </TableBasic>
  );
};

storiesOf("Button", module).add(
  "ghjjjjjjjjjjjjjjjjjjjjjjj",
  withInfo({
    TableComponent
  })(() => <Container><Button>Hello Button</Button></Container>)
);