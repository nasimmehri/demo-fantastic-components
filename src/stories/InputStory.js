import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Container, Input, Row, Col,Panel} from 'fantastic-components';
const ButtonStory = (storiesOf('Input', module)
    .add(
      'Selected Examples',
      () =>
        <div>
          <Panel header={'Simple examples'}>
            <Row>
              <Col lg4>
                <Input placeholder={'primary '}
                       label={'primary '}
                       primary
                       onChange={action('onChange')}
                />
              </Col>
              <Col lg4>
                <Input placeholder={'secondary'}
                       label={'secondary'}
                       secondary
                       onChange={action('onChange')}
                />
              </Col>
              <Col lg4>
                <Input placeholder={'warning'}
                       label={'warning'}
                       warning
                       onChange={action('onChange')}
                />
              </Col>
              <Col lg4>
                <Input placeholder={'info'}
                       label={'info'}
                       info
                       onChange={action('onChange')}
                />
              </Col>
              <Col lg4>
                <Input placeholder={'danger'}
                       label={'danger'}
                       danger
                       onChange={action('onChange')}
                />
              </Col>
              <Col lg4>
                <Input placeholder={'success'}
                       label={'success'}
                       success
                       onChange={action('onChange')}
                />
              </Col>

            </Row>
          </Panel>
          <br/>
          <Panel header={'Icon examples'} >
            <Row>
              <Col lg4>
                <Input placeholder={'primary with icon'}
                       label={'primary with icon'}
                       primary
                       icon={'user'}
                       onChange={action('onChange')}
                />
              </Col>
              <Col lg4>
                <Input placeholder={'secondary with icon'}
                       label={'secondary with icon'}
                       secondary
                       icon={'user'}
                       onChange={action('onChange')}
                />
              </Col>
              <Col lg4>
                <Input placeholder={'warning with icon'}
                       label={'warning with icon'}
                       warning
                       icon={'user'}
                       onChange={action('onChange')}
                />
              </Col>
              <Col lg4>
                <Input placeholder={'info with icon'}
                       label={'info with icon'}
                       info
                       icon={'user'}
                       onChange={action('onChange')}
                />
              </Col>
              <Col lg4>
                <Input placeholder={'danger with icon'}
                       label={'danger with icon'}
                       danger
                       icon={'user'}
                       onChange={action('onChange')}
                />
              </Col>
              <Col lg4>
                <Input placeholder={'success with icon'}
                       label={'success with icon'}
                       success
                       icon={'user'}
                       onChange={action('onChange')}
                />
              </Col>

            </Row>
          </Panel>
          <br/>
          <Panel header={'Disabled examples'}>
            <Row>
              <Col lg6>
                <Input placeholder={'Input with Disabled props'}
                       label={'Input with Disabled props'}
                       disabled
                       icon={'user'}
                       onChange={action('onChange')}
                />
              </Col>

            </Row>
          </Panel>
          <br/>
          <Panel header={'Error example'}>
            <Row>
              <Col lg6>
                <Input placeholder={'Input with error props'}
                       label={'Input with error props'}
                       error
                       onChange={action('onChange')}
                       errorText={'Error!!!'}
                />
              </Col>
            </Row>
          </Panel>
        </div>
    )
);

export default  ButtonStory;