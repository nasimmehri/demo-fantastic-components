import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Container, Upload, Row, Col, Panel} from 'fantastic-components';
const ToolTipStory = (storiesOf(' Simple File Upload', module)
    .add(
      'Selected Examples',
      () =>
        <Container>
          <Row>
            <Col lg6>
              <Panel header={'Simple File Upload'}>
                <Upload

                />
              </Panel>
            </Col>
          </Row>
        </Container>
    )

);

export default  ToolTipStory;