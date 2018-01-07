import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Container, Icon, Row, Col, Panel} from 'fantastic-components';
const ButtonStory = (storiesOf('Icon', module)
    .add(
      'Selected Examples',
      () =>
        <div>
          <Panel header={'Simple example'}>
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
                  <Icon iconClass={'user'}  xxsmall primary forColor="red"/>
                </Col>
                <Col lg2 md6 sm12>
                  <Icon iconClass={'user'} xsmall primary forColor="red"/>
                </Col>
                <Col lg2 md6 sm12>
                  <Icon iconClass={'user'} small primary forColor="red"/>
                </Col>
                <Col lg2 md6 sm12>
                  <Icon iconClass={'user'} larg primary forColor="red"/>
                </Col>
                <Col lg2 md6 sm12>
                  <Icon iconClass={'user'}  xlarg primary forColor="red"/>
                </Col>
                <Col lg2 md6 sm12>
                  <Icon iconClass={'user'}  xxlarg primary forColor="red"/>
                </Col>
              </Row>
            </Container>
          </Panel>

        </div>
    )

);

export default  ButtonStory;