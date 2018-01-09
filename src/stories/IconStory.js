import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Container, Icon, Row, Col, Panel} from 'fantastic-components';
const IconStory = (storiesOf('Icon', module)
    .add(
      'Selected Examples',
      () =>
        <div>
          <Panel header={'Theme example'}>
            <Container>
              <Row>
                <Col lg2 md6 sm12>
                  <Icon iconClass={'user'} primary forColor="red"/>
                </Col>
                <Col lg2 md6 sm12>
                  <Icon iconClass={'user'} secondary forColor="red"/>
                </Col>
                <Col lg2 md6 sm12>
                  <Icon iconClass={'user'} warning forColor="red" />
                </Col>
                <Col lg2 md6 sm12>
                  <Icon iconClass={'user'} info forColor="red"/>
                </Col>
                <Col lg2 md6 sm12>
                  <Icon iconClass={'user'} success forColor="red"/>
                </Col>
                <Col lg2 md6 sm12>
                  <Icon iconClass={'user'} danger forColor="red"/>
                </Col>
              </Row>

            </Container>
          </Panel>
          <br/>
          <Panel header={'Size examples'}>
            <Container>
              <Row>
                <Col lg2 md6 sm12>
                  <Icon iconClass={'user'}  xxsmall />
                </Col>
                <Col lg2 md6 sm12>
                  <Icon iconClass={'user'} xsmall />
                </Col>
                <Col lg2 md6 sm12>
                  <Icon iconClass={'user'} small />
                </Col>
                <Col lg2 md6 sm12>
                  <Icon iconClass={'user'} larg />
                </Col>
                <Col lg2 md6 sm12>
                  <Icon iconClass={'user'}  xlarg />
                </Col>
                <Col lg2 md6 sm12>
                  <Icon iconClass={'user'}  xxlarg />
                </Col>
              </Row>
            </Container>
          </Panel>
          <br/>
          <Panel header={'Color examples : (foreColor="red")'}>
            <Container>
              <Row>
                <Col lg2 md6 sm12>
                  <Icon iconClass={'user'}  larg foreColor="red" />
                </Col>
              </Row>
            </Container>
          </Panel>

        </div>
    )

);

export default  IconStory;