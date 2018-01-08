import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Container, Radio, Row, Col, Panel, ButtonToggle, CheckBox, RadioGroup} from 'fantastic-components';
let items = [
  {
    id: 1,
    value: 1,
    label: 'radio1'
  },
  {
    id: 2,
    value: 2,
    label: 'radio2'
  },
  {
    id: 3,
    value: 3,
    label: 'radio3'
  },
];
const SwitchStory = (storiesOf('Switch', module)
    .add(
      'ButtonToggle',
      () =>
        <Container>
          <Row>
            <Col lg6 md6 sm12>
              <Panel header={'Simple example'}>
                <Container>
                  <Row>
                    <Col lg2 md6 sm12>
                      <ButtonToggle onChange={action('onChange')}
                      />
                    </Col>
                  </Row>
                </Container>
              </Panel>
            </Col>
            <Col lg6 md6 sm12>
              <Panel header={'Disabled example'}>
                <Container>
                  <Row>
                    <Col lg2 md6 sm12>
                      <ButtonToggle onChange={action('onChange')}
                                    disabled={true}
                      />
                    </Col>
                  </Row>
                </Container>
              </Panel>
            </Col>
          </Row>
        </Container>
    )
    .add(
      'CheckBox',
      () =>
        <Container>
          <Row>
            <Col lg6 md6 sm12>
              <Panel header={'Simple example'}>
                <Container>
                  <Row>
                    <Col lg2 md6 sm12>
                      <CheckBox onCheck={action('onChange')}
                                label={'Simple example'}
                      />
                    </Col>
                  </Row>
                </Container>
              </Panel>
            </Col>
            <Col lg6 md6 sm12>
              <Panel header={'Disabled example'}>
                <Container>
                  <Row>
                    <Col lg2 md6 sm12>
                      <CheckBox onCheck={action('onChange')}
                                label={'Disabled example'}
                                disabled={true}
                      />
                    </Col>
                  </Row>
                </Container>
              </Panel>
            </Col>
          </Row>
        </Container>
    )
    .add(
      'Radio',
      () =>
        <Container>
          <Row>
            <Col lg6 md6 sm12>
              <Panel header={'Simple example'}>
                <Container>
                  <Row>
                    <Col lg2 md6 sm12>
                      <Radio onCheck={action('onChange')}
                             label={'Simple example'}
                             primary
                      />
                    </Col>
                  </Row>
                </Container>
              </Panel>
            </Col>
            <Col lg6 md6 sm12>
              <Panel header={'Disabled example'}>
                <Container>

                      <Radio onCheck={action('onChange')}
                             label={'Disabled example'}
                             disabled={true}
                             primary

                      />

                </Container>
              </Panel>
            </Col>
          </Row>
        </Container>
    )
    .add(
      'RadioGroup',
      () =>
        <Container>
          <Row>
            <Col lg6 md6 sm12>
              <Panel header={'Simple example'}>
                <Container>

                      <RadioGroup onCheck={action('onChange')}
                                  label={'Simple example'}
                                  onItemSelected={action('onChange')}
                                  items={items}
                                  primary
                                  inline
                      />

                </Container>
              </Panel>
            </Col>

          </Row>
        </Container>
    )

);

export default  SwitchStory;