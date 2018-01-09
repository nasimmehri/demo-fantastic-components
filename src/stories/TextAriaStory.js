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
                <TextAria placeholder={'Primary '}
                          label={'Primary '}
                          primary
                          onChange={action('onChange')}
                />
              </Col>
              <Col lg4>
                <TextAria placeholder={'Secondary'}
                          label={'Secondary'}
                          secondary
                          onChange={action('onChange')}
                />
              </Col>
              <Col lg4>
                <TextAria placeholder={'Warning'}
                          label={'Warning'}
                          warning
                          onChange={action('onChange')}
                />
              </Col>
              <Col lg4>
                <TextAria placeholder={'Info'}
                          label={'Info'}
                          info
                          onChange={action('onChange')}
                />
              </Col>
              <Col lg4>
                <TextAria placeholder={'Danger'}
                          label={'Danger'}
                          danger
                          onChange={action('onChange')}
                />
              </Col>
              <Col lg4>
                <TextAria placeholder={'Success'}
                          label={'Success'}
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
                <TextAria placeholder={'Primary with icon'}
                          label={'Primary with icon'}
                          primary
                          icon={'user'}
                          onChange={action('onChange')}
                />
              </Col>
              <Col lg4>
                <TextAria placeholder={'Secondary with icon'}
                          label={'Secondary with icon'}
                          secondary
                          icon={'user'}
                          onChange={action('onChange')}
                />
              </Col>
              <Col lg4>
                <TextAria placeholder={'Warning with icon'}
                          label={'Warning with icon'}
                          warning
                          icon={'user'}
                          onChange={action('onChange')}
                />
              </Col>
              <Col lg4>
                <TextAria placeholder={'Info with icon'}
                          label={'Info with icon'}
                          info
                          icon={'user'}
                          onChange={action('onChange')}
                />
              </Col>
              <Col lg4>
                <TextAria placeholder={'Danger with icon'}
                          label={'Danger with icon'}
                          danger
                          icon={'user'}
                          onChange={action('onChange')}
                />
              </Col>
              <Col lg4>
                <TextAria placeholder={'Success with icon'}
                          label={'Success with icon'}
                          success
                          icon={'user'}
                          onChange={action('onChange')}
                />
              </Col>

            </Row>
          </Panel>
          <br/>
          <Row>

            <Col lg4>
              <Panel header={'Row example'}>
                    <TextAria
                      icon={'user'}
                      placeholder={'TextAria with Row props :(rows=4)'}
                      label={'TextAria with Row props :(rows=4)'}
                      onChange={action('onChange')}
                      rows={4}
                    />

              </Panel>
            </Col>
            <Col lg4>
              <Panel header={'Error examples'}>
                <TextAria placeholder={'TextAria with ErrorText props'}
                          label={'TextAria with ErrorText props'}
                          errorText={'TextAria with ErrorText props'}
                          icon={'user'}
                          onChange={action('onChange')}
                />

              </Panel>
            </Col>
            <Col lg4>
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