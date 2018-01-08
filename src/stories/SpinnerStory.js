import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Container, Spinner, Row, Col, Panel} from 'fantastic-components';
const SpinnerStory = (storiesOf('Spinner', module)
    .add(
      'Selected Examples',
      () =>
        <div>
          <Panel header={'Simple example'}>
            <Container>
              <Row>
                <Col lg2 md6 sm12>
                  <Spinner icon={'spinner'}  primary />
                </Col>
                <Col lg2 md6 sm12>
                  <Spinner icon={'spinner'} secondary />
                </Col>
                <Col lg2 md6 sm12>
                  <Spinner icon={'spinner'} warning />
                </Col>
                <Col lg2 md6 sm12>
                  <Spinner icon={'spinner'} info/>
                </Col>
                <Col lg2 md6 sm12>
                  <Spinner icon={'spinner'} success/>
                </Col>
                <Col lg2 md6 sm12>
                  <Spinner icon={'spinner'} danger/>
                </Col>
              </Row>

            </Container>
          </Panel>
          <br/>
          <Panel header={'Size example'}>
            <Container>
              <Row>
                <Col lg2 md6 sm12>
                  <Spinner icon={'spinner'}  xxlarg />
                </Col>
                <Col lg2 md6 sm12>
                  <Spinner icon={'spinner'} xlarg />
                </Col>
                <Col lg2 md6 sm12>
                  <Spinner icon={'spinner'} larg />
                </Col>
                <Col lg2 md6 sm12>
                  <Spinner icon={'spinner'} small/>
                </Col>
                <Col lg2 md6 sm12>
                  <Spinner icon={'spinner'} xsmall/>
                </Col>
                <Col lg2 md6 sm12>
                  <Spinner icon={'spinner'} xxsmall/>
                </Col>
              </Row>

            </Container>
          </Panel>

        </div>
    )

);

export default  SpinnerStory;