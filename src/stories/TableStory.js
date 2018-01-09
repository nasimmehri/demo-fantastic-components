import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Container, Table, Row, Col, Panel} from 'fantastic-components';
let elements = [
  {
    id: 1,
    name: 'Jim'
  },
  {
    id: 2,
    name: 'Sara'
  },
  {
    id: 3,
    name: 'Kati'
  },
  {
    id: 4,
    name: 'Teo'
  }
];
const TableStory = (storiesOf('Table', module)

    .add(
      'Selected Examples',
      () =>
        <Row>
          <Col lg6>
            <Panel header={'Default examples'}>
              <Table
                rowsCount={elements.length}
                columns={[
                  "Id",
                  "Name"
                ]}
                columnSize={['30%,40%']}
                getRow={(rowId) => {
                  let id = elements[rowId].id;
                  let title = elements[rowId].name;
                  return [
                    id,
                    title,
                  ];
                }}
                onEditClick={(rowId) => {
                  console.log('rowId:', rowId);
                }}
                onDeleteClick={(rowId) => {
                  console.log('rowId:', rowId);
                }}
                actionColumnLabel="action"
                deleteMessage="Are you sure>"
                pageSize={5}
              />
            </Panel>
            <br/>
          </Col>
          <Col lg6>
            <Panel header={'Success examples'}>
              <Table
                rowsCount={elements.length}
                columns={[
                  "Id",
                  "Name"
                ]}
                getRow={(rowId) => {
                  let id = elements[rowId].id;
                  let title = elements[rowId].name;
                  return [
                    id,
                    title,
                  ];
                }}
                onEditClick={(rowId) => {
                  console.log('rowId:', rowId);
                }}
                onDeleteClick={(rowId) => {
                  console.log('rowId:', rowId);
                }}
                actionColumnLabel="action"
                deleteMessage="Are you sure>"
                pageSize={5}
                success
              />
            </Panel>
            <br/>
          </Col>
          <Col lg6>
            <Panel header={'Primary examples'}>
              <Table
                rowsCount={elements.length}
                columns={[
                  "Id",
                  "Name"
                ]}
                getRow={(rowId) => {
                  let id = elements[rowId].id;
                  let title = elements[rowId].name;
                  return [
                    id,
                    title,
                  ];
                }}
                onEditClick={(rowId) => {
                  console.log('rowId:', rowId);
                }}
                onDeleteClick={(rowId) => {
                  console.log('rowId:', rowId);
                }}
                actionColumnLabel="action"
                deleteMessage="Are you sure>"
                pageSize={5}
                primary
              />
            </Panel>
            <br/>
          </Col>
          <Col lg6>
            <Panel header={'Secondary examples'}>
              <Table
                rowsCount={elements.length}
                columns={[
                  "Id",
                  "Name"
                ]}
                getRow={(rowId) => {
                  let id = elements[rowId].id;
                  let title = elements[rowId].name;
                  return [
                    id,
                    title,
                  ];
                }}
                onEditClick={(rowId) => {
                  console.log('rowId:', rowId);
                }}
                onDeleteClick={(rowId) => {
                  console.log('rowId:', rowId);
                }}
                actionColumnLabel="action"
                deleteMessage="Are you sure>"
                pageSize={5}
                secondary
              />
            </Panel>
            <br/>
          </Col>
          <Col lg6>
            <Panel header={'Info examples'}>
              <Table
                rowsCount={elements.length}
                columns={[
                  "Id",
                  "Name"
                ]}
                getRow={(rowId) => {
                  let id = elements[rowId].id;
                  let title = elements[rowId].name;
                  return [
                    id,
                    title,
                  ];
                }}
                onEditClick={(rowId) => {
                  console.log('rowId:', rowId);
                }}
                onDeleteClick={(rowId) => {
                  console.log('rowId:', rowId);
                }}
                actionColumnLabel="action"
                deleteMessage="Are you sure>"
                pageSize={5}
                info
              />
            </Panel>
            <br/>
          </Col>

          <Col lg6>
            <Panel header={'Danger examples'}>
              <Table
                rowsCount={elements.length}
                columns={[
                  "Id",
                  "Name"
                ]}
                getRow={(rowId) => {
                  let id = elements[rowId].id;
                  let title = elements[rowId].name;
                  return [
                    id,
                    title,
                  ];
                }}
                onEditClick={(rowId) => {
                  console.log('rowId:', rowId);
                }}
                onDeleteClick={(rowId) => {
                  console.log('rowId:', rowId);
                }}
                actionColumnLabel="action"
                deleteMessage="Are you sure>"
                pageSize={5}
                danger
              />
            </Panel>
            <br/>
          </Col>

          <Col lg6>
            <Panel header={'Warning examples'}>
              <Table
                rowsCount={elements.length}
                columns={[
                  "Id",
                  "Name"
                ]}
                getRow={(rowId) => {
                  let id = elements[rowId].id;
                  let title = elements[rowId].name;
                  return [
                    id,
                    title,
                  ];
                }}
                onEditClick={(rowId) => {
                  console.log('rowId:', rowId);
                }}
                onDeleteClick={(rowId) => {
                  console.log('rowId:', rowId);
                }}
                actionColumnLabel="action"
                deleteMessage="Are you sure>"
                pageSize={5}
                warning
              />
            </Panel>
            <br/>
          </Col>
          <Col lg6>
            <Panel header={'Striped examples'}>
              <Table
                rowsCount={elements.length}
                columns={[
                  "Id",
                  "Name"
                ]}
                getRow={(rowId) => {
                  let id = elements[rowId].id;
                  let title = elements[rowId].name;
                  return [
                    id,
                    title,
                  ];
                }}
                onEditClick={(rowId) => {
                  console.log('rowId:', rowId);
                }}
                onDeleteClick={(rowId) => {
                  console.log('rowId:', rowId);
                }}
                actionColumnLabel="action"
                deleteMessage="Are you sure>"
                pageSize={5}
                striped
              />
            </Panel>
            <br/>
          </Col>

          <Col lg6>
            <Panel header={'Hover examples'}>
              <Table
                rowsCount={elements.length}
                columns={[
                  "Id",
                  "Name"
                ]}
                getRow={(rowId) => {
                  let id = elements[rowId].id;
                  let title = elements[rowId].name;
                  return [
                    id,
                    title,
                  ];
                }}
                onEditClick={(rowId) => {
                  console.log('rowId:', rowId);
                }}
                onDeleteClick={(rowId) => {
                  console.log('rowId:', rowId);
                }}
                actionColumnLabel="action"
                deleteMessage="Are you sure>"
                pageSize={5}
                hover
              />
            </Panel>
            <br/>
          </Col>

          <Col lg6>
            <Panel header={'Pagination examples'}>
              <Table
                rowsCount={elements.length}
                columns={[
                  "Id",
                  "Name"
                ]}
                getRow={(rowId) => {
                  let id = elements[rowId].id;
                  let title = elements[rowId].name;
                  return [
                    id,
                    title,
                  ];
                }}
                onEditClick={(rowId) => {
                  console.log('rowId:', rowId);
                }}
                onDeleteClick={(rowId) => {
                  console.log('rowId:', rowId);
                }}
                actionColumnLabel="action"
                deleteMessage="Are you sure>"
                pageSize={3}
                hover
                striped
              />
            </Panel>
            <br/>
          </Col>

        </Row>
    )

);

export default  TableStory;