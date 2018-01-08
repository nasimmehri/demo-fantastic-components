import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Container, TextAria, Row, Col, Panel} from 'fantastic-components';
const TextAriaStory = (storiesOf('TextAria', module)
    .add(
      'Selected Examples',
      () =>
        <div>
          <Panel header={'Simple examples'}>
            <Row>
              <Col lg4>
                <TextAria placeholder={'primary '}
                          label={'primary '}
                          primary
                          onChange={action('onChange')}
                />
              </Col>
              <Col lg4>
                <TextAria placeholder={'secondary'}
                          label={'secondary'}
                          secondary
                          onChange={action('onChange')}
                />
              </Col>
              <Col lg4>
                <TextAria placeholder={'warning'}
                          label={'warning'}
                          warning
                          onChange={action('onChange')}
                />
              </Col>
              <Col lg4>
                <TextAria placeholder={'info'}
                          label={'info'}
                          info
                          onChange={action('onChange')}
                />
              </Col>
              <Col lg4>
                <TextAria placeholder={'danger'}
                          label={'danger'}
                          danger
                          onChange={action('onChange')}
                />
              </Col>
              <Col lg4>
                <TextAria placeholder={'success'}
                          label={'success'}
                          success
                          onChange={action('onChange')}
                />
              </Col>

            </Row>
          </Panel>
          <br/>
          <Panel header={'Icon examples'}>
            <Row>
              <Col lg4>
                <TextAria placeholder={'primary with icon'}
                          label={'primary with icon'}
                          primary
                          icon={'user'}
                          onChange={action('onChange')}
                />
              </Col>
              <Col lg4>
                <TextAria placeholder={'secondary with icon'}
                          label={'secondary with icon'}
                          secondary
                          icon={'user'}
                          onChange={action('onChange')}
                />
              </Col>
              <Col lg4>
                <TextAria placeholder={'warning with icon'}
                          label={'warning with icon'}
                          warning
                          icon={'user'}
                          onChange={action('onChange')}
                />
              </Col>
              <Col lg4>
                <TextAria placeholder={'info with icon'}
                          label={'info with icon'}
                          info
                          icon={'user'}
                          onChange={action('onChange')}
                />
              </Col>
              <Col lg4>
                <TextAria placeholder={'danger with icon'}
                          label={'danger with icon'}
                          danger
                          icon={'user'}
                          onChange={action('onChange')}
                />
              </Col>
              <Col lg4>
                <TextAria placeholder={'success with icon'}
                          label={'success with icon'}
                          success
                          icon={'user'}
                          onChange={action('onChange')}
                />
              </Col>

            </Row>
          </Panel>
          <br/>
          <Row>

            <Col lg6>
              <Panel header={'Row example'}>

                    <TextAria
                      placeholder={'Row=5'}
                      label={'Row=5'}
                      onChange={action('onChange')}
                      rows={5}
                    />

              </Panel>
            </Col>
            <Col lg6>
              <Panel header={'Disabled examples'}>

                    <TextAria placeholder={'TextAria with Disabled props'}
                              label={'TextAria with Disabled props'}
                              disabled
                              icon={'user'}
                              onChange={action('onChange')}
                    />

              </Panel>
            </Col>
          </Row>

          <br/>

        </div>
    )
);

export default  TextAriaStory;