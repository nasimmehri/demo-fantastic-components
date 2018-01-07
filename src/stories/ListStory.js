import React from 'react';
import {storiesOf} from '@storybook/react';

import {Container, List, Row, Col, Panel} from 'fantastic-components';
let errorList = ['Email Invalid!', 'Username is wrong!'];
const BreadcrumbStory = (storiesOf('List', module)
    .add(
      'Selected Examples',
      () =>
        <Panel header={'Simple example'}>
          <Row >
            <Col lg6 style={{marginBottom: 10}}>
              <List options={errorList}
                    title={'List of Errors'}


              />
            </Col>
            <Col lg6 style={{marginBottom: 10}}>
              <List options={errorList}
                    title={'List of Errors'}
                    primary
              />
            </Col>
            <Col lg6 style={{marginBottom: 10}}>
              <List options={errorList}
                    title={'List of Errors'}
                    secondary
              />
            </Col>
            <Col lg6 style={{marginBottom: 10}}>
              <List options={errorList}
                    title={'List of Errors'}
                    warning
              />
            </Col>
            <Col lg6 style={{marginBottom: 10}}>
              <List options={errorList}
                    title={'List of Errors'}
                    danger
              />
            </Col>
            <Col lg6 style={{marginBottom: 10}}>
              <List options={errorList}
                    title={'List of Errors'}
                    info
              />
            </Col>
            <Col lg6 style={{marginBottom: 10}}>
              <List options={errorList}
                    title={'List of Errors'}
                    success
              />
            </Col>
          </Row>
        </Panel>
    )

);

export default  BreadcrumbStory;