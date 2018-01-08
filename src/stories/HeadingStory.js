import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Container, Input, Row, Col, Panel, H1, H2, H3, H4, H5, H6} from 'fantastic-components';
const HeadingStory = (storiesOf('Heading', module)
    .add(
      'Selected Examples',
      () =>
        <Row>
          <Col lg6>
            <Panel header={'Default examples'}>
              <Container>
                <Row>
                  <Col lg6>
                    <Row>
                      <H1 >Heading 1</H1>
                    </Row>
                    <Row>
                      <H2 >Heading 1</H2>
                    </Row>
                    <Row>
                      <H3 >Heading 1</H3>
                    </Row>
                    <Row>
                      <H4 >Heading 1</H4>
                    </Row>
                    <Row>
                      <H5 >Heading 1</H5>
                    </Row>
                    <Row>
                      <H6 >Heading 1</H6>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Panel>


          </Col>
          <Col lg6>
            <Panel header={'Simple examples'}>
              <Container>
                <Row>
                  <H1 primary>Heading 1</H1>
                </Row>
                <Row>
                  <H2 secondary>Heading 1</H2>
                </Row>
                <Row>
                  <H3 warning>Heading 1</H3>
                </Row>
                <Row>
                  <H4 info>Heading 1</H4>
                </Row>
                <Row>
                  <H5 success>Heading 1</H5>
                </Row>
                <Row>
                  <H6 danger>Heading 1</H6>
                </Row>
              </Container>
            </Panel>
          </Col>
        </Row>
    )
);

export default  HeadingStory;