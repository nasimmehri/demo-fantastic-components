import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Container, ToolTip, Row, Col, Panel} from 'fantastic-components';
const ToolTipStory = (storiesOf('Simple ToolTip', module)
    .add(
      'Selected Examples',
      () =>
        <Row>
          <Col lg6>
            <Panel header={'Simple example'}>

              <ToolTip label="Simple ToolTip">
                <br/>
                <br/>
               hover me!
              </ToolTip>

            </Panel>
            <br/>
          </Col>
          <Col lg6>
            <Panel header={'Primary example'}>
              <ToolTip label="Simple ToolTip" primary>
                <br/>
                <br/>
                hover me!
              </ToolTip>

            </Panel>
            <br/>
          </Col>

          <Col lg6>
            <Panel header={'Secondary example'}>
              <ToolTip label="Simple ToolTip" secondary>
                <br/>
                <br/>
                hover me!
              </ToolTip>
            </Panel>
            <br/>
          </Col>

          <Col lg6>
            <Panel header={'Success example'}>

              <ToolTip label="Simple ToolTip" success>
                <br/>
                <br/>
                hover me!
              </ToolTip>

            </Panel>
            <br/>
          </Col>
          <Col lg6>
            <Panel header={'Danger example'}>
              <ToolTip label="Simple ToolTip" danger>
                <br/>
                <br/>
                hover me!
              </ToolTip>

            </Panel>
            <br/>
          </Col>

          <Col lg6>
            <Panel header={'Info example'}>
              <ToolTip label="Simple ToolTip" info>
                <br/>
                <br/>
                hover me!
              </ToolTip>
            </Panel>
            <br/>
          </Col>

        </Row>
    )

);

export default  ToolTipStory;