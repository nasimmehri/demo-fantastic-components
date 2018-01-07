import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Container, Row, Col, Panel} from 'fantastic-components';
const ButtonStory = (storiesOf('Panel', module)
    .add(
      'Selected Examples',
      () =>
        <div>
          <Row>
            <Col lg6 style={{marginBottom:20}}>
              <Panel header={'Simple example default'}
                     footer={'Simple example default'}

              >

              </Panel>
            </Col>
            <Col lg6 style={{marginBottom:20}}>
              <Panel header={'Simple example primary'}
                     footer={'Simple example primary'}
                     primary
              >

              </Panel>
            </Col>
            <Col lg6 style={{marginBottom:20}}>
              <Panel header={'Simple example secondary'}
                     footer={'Simple example secondary'}
                     secondary
              >

              </Panel>
            </Col>
            <Col lg6 style={{marginBottom:20}}>
              <Panel header={'Simple example warning'}
                     footer={'Simple example warning'}
                     warning
              >

              </Panel>
            </Col>
            <Col lg6 style={{marginBottom:20}}>
              <Panel header={'Simple example info'}
                     footer={'Simple example info'}
                     info
              >

              </Panel>
            </Col>
            <Col lg6 style={{marginBottom:20}}>
              <Panel header={'Simple example success'}
                     footer={'Simple example success'}
                     success
              >

              </Panel>
            </Col>
            <Col lg6 style={{marginBottom:20}}>
              <Panel header={'Simple example danger'}
                     footer={'Simple example danger'}
                     danger
              >

              </Panel>
            </Col>
          </Row>

        </div>
    )

);

export default  ButtonStory;