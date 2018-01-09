import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Container, Input, Row, Col,Panel} from 'fantastic-components';
const InputStory = (storiesOf('Input', module)
    .add(
      'Selected Examples',
      () =>
        <div>
          <Panel header={'Simple examples'}>
            <Row>
              <Col lg4>
                <Input placeholder={'Primary '}
                       label={'Primary '}
                       primary
                       onChange={action('onChange')}
                />
              </Col>
              <Col lg4>
                <Input placeholder={'Secondary'}
                       label={'Secondary'}
                       secondary
                       onChange={action('onChange')}
                />
              </Col>
              <Col lg4>
                <Input placeholder={'Warning'}
                       label={'Warning'}
                       warning
                       onChange={action('onChange')}
                />
              </Col>
              <Col lg4>
                <Input placeholder={'Info'}
                       label={'Info'}
                       info
                       onChange={action('onChange')}
                />
              </Col>
              <Col lg4>
                <Input placeholder={'Danger'}
                       label={'Danger'}
                       danger
                       onChange={action('onChange')}
                />
              </Col>
              <Col lg4>
                <Input placeholder={'Success'}
                       label={'Success'}
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
                <Input placeholder={'Primary with icon'}
                       label={'Primary with icon'}
                       primary
                       icon={'user'}
                       onChange={action('onChange')}
                />
              </Col>
              <Col lg4>
                <Input placeholder={'Secondary with icon'}
                       label={'Secondary with icon'}
                       secondary
                       icon={'user'}
                       onChange={action('onChange')}
                />
              </Col>
              <Col lg4>
                <Input placeholder={'Warning with icon'}
                       label={'Warning with icon'}
                       warning
                       icon={'user'}
                       onChange={action('onChange')}
                />
              </Col>
              <Col lg4>
                <Input placeholder={'Info with icon'}
                       label={'Info with icon'}
                       info
                       icon={'user'}
                       onChange={action('onChange')}
                />
              </Col>
              <Col lg4>
                <Input placeholder={'Danger with icon'}
                       label={'Danger with icon'}
                       danger
                       icon={'user'}
                       onChange={action('onChange')}
                />
              </Col>
              <Col lg4>
                <Input placeholder={'Success with icon'}
                       label={'Success with icon'}
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

export default  InputStory;