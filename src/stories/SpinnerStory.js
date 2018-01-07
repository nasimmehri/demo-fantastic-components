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
                  <Spinner spin={'spinner'}  primary />
                </Col>
                <Col lg2 md6 sm12>
                  <Spinner spin={'spinner'} secondary />
                </Col>
                <Col lg2 md6 sm12>
                  <Spinner spin={'spinner'} warning />
                </Col>
                <Col lg2 md6 sm12>
                  <Spinner spin={'spinner'} info/>
                </Col>
                <Col lg2 md6 sm12>
                  <Spinner spin={'spinner'} success/>
                </Col>
                <Col lg2 md6 sm12>
                  <Spinner spin={'spinner'} danger/>
                </Col>
              </Row>

            </Container>
          </Panel>
          <br/>
          <Panel header={'Size example'}>
            <Container>
              <Row>
                <Col lg2 md6 sm12>
                  <Spinner spin={'spinner'}  xxlarg />
                </Col>
                <Col lg2 md6 sm12>
                  <Spinner spin={'spinner'} xlarg />
                </Col>
                <Col lg2 md6 sm12>
                  <Spinner spin={'spinner'} larg />
                </Col>
                <Col lg2 md6 sm12>
                  <Spinner spin={'spinner'} small/>
                </Col>
                <Col lg2 md6 sm12>
                  <Spinner spin={'spinner'} xsmall/>
                </Col>
                <Col lg2 md6 sm12>
                  <Spinner spin={'spinner'} xxsmall/>
                </Col>
              </Row>

            </Container>
          </Panel>

        </div>
    )

);

export default  SpinnerStory;