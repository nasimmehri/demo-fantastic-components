import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Container, Breadcrumb, Row, Col, Panel} from 'fantastic-components';
import {BrowserRouter as Router} from 'react-router-dom';
let items=[
  {
    name:'Home',
    path:'/'
  },
  {
    name:'Panel',
    path:'/'
  },
  {
    name:'Input',
    path:'/'
  },
];
const BreadcrumbStory = (storiesOf('Breadcrumb', module)
    .add(
      'Selected Examples',
      () =>
        <Router>
          <Panel header={'Simple example'}>
            <Container>
              <Row>
                <Col lg4 md6 sm12>
                  <Breadcrumb items={items} />
                </Col>
                <Col lg4 md6 sm12>
                  <Breadcrumb items={items} primary/>
                </Col>
                <Col lg4 md6 sm12>
                  <Breadcrumb items={items} secondary/>
                </Col>
                <Col lg4 md6 sm12>
                  <Breadcrumb items={items} warning />
                </Col>
                <Col lg4 md6 sm12>
                  <Breadcrumb items={items} info />
                </Col>
                <Col lg4 md6 sm12>
                  <Breadcrumb items={items} success />
                </Col>
                <Col lg4 md6 sm12>
                  <Breadcrumb items={items} danger />
                </Col>
              </Row>

            </Container>
          </Panel>
        </Router>
    )

);

export default  BreadcrumbStory;