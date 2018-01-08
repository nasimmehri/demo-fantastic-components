import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Container, Table, Row, Col, Panel} from 'fantastic-components';
let elements = [
  {
    id: 1,
    title: 'title1'
  },
  {
    id: 2,
    title: 'title2'
  },
  {
    id: 3,
    title: 'title3'
  },
  {
    id: 4,
    title: 'title4'
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
                  "id",
                  "title"
                ]}
                columnSize={[
                  '30%',
                  '30%',
                ]}
                getRow={(rowId) => {
                  let id = elements[rowId].id;
                  let title = elements[rowId].title;
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
                  "id",
                  "title"
                ]}
                columnSize={[
                  '30%',
                  '30%',
                ]}
                getRow={(rowId) => {
                  let id = elements[rowId].id;
                  let title = elements[rowId].title;
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
                  "id",
                  "title"
                ]}
                columnSize={[
                  '30%',
                  '30%',
                ]}
                getRow={(rowId) => {
                  let id = elements[rowId].id;
                  let title = elements[rowId].title;
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
                  "id",
                  "title"
                ]}
                columnSize={[
                  '30%',
                  '30%',
                ]}
                getRow={(rowId) => {
                  let id = elements[rowId].id;
                  let title = elements[rowId].title;
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
                  "id",
                  "title"
                ]}
                columnSize={[
                  '30%',
                  '30%',
                ]}
                getRow={(rowId) => {
                  let id = elements[rowId].id;
                  let title = elements[rowId].title;
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
                  "id",
                  "title"
                ]}
                columnSize={[
                  '30%',
                  '30%',
                ]}
                getRow={(rowId) => {
                  let id = elements[rowId].id;
                  let title = elements[rowId].title;
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
                  "id",
                  "title"
                ]}
                columnSize={[
                  '30%',
                  '30%',
                ]}
                getRow={(rowId) => {
                  let id = elements[rowId].id;
                  let title = elements[rowId].title;
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
                  "id",
                  "title"
                ]}
                columnSize={[
                  '30%',
                  '30%',
                ]}
                getRow={(rowId) => {
                  let id = elements[rowId].id;
                  let title = elements[rowId].title;
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
            <Panel header={'Striped examples'}>
              <Table
                rowsCount={elements.length}
                columns={[
                  "id",
                  "title"
                ]}
                columnSize={[
                  '30%',
                  '30%',
                ]}
                getRow={(rowId) => {
                  let id = elements[rowId].id;
                  let title = elements[rowId].title;
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
                  "id",
                  "title"
                ]}
                columnSize={[
                  '30%',
                  '30%',
                ]}
                getRow={(rowId) => {
                  let id = elements[rowId].id;
                  let title = elements[rowId].title;
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