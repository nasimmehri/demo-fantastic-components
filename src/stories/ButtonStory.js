import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Container, Button, Row, Col, Panel} from 'fantastic-components';
const ButtonStory = (storiesOf('Button', module)

    .add(
      'Selected Examples',
      () =>
        <div>
          <Panel header={'Simple examples'}>
            <Row>
              <Col lg2 md6 sm12>
                <Button primary
                        label='Primary '
                        onClick={action('clicked')}/>
              </Col>
              <Col lg2 md6 sm12>
                <Button
                  secondary
                  label='secondary '
                  onClick={action('clicked')}
                />
              </Col>
              <Col lg2 md6 sm12>
                <Button
                  warning
                  label='Warning '
                  onClick={action('clicked')}
                />
              </Col>

              <Col lg2 md6 sm12>
                <Button
                  success
                  label='Success'
                  onClick={action('clicked')}
                />
              </Col>
              <Col lg2 md6 sm12>
                <Button
                  danger
                  label='Danger'
                  onClick={action('clicked')}
                />
              </Col>
              <Col lg2 md6 sm12>
                <Button
                  info
                  label='Info'
                  onClick={action('clicked')}
                />
              </Col>
            </Row>
          </Panel>
          <br/>
          <Panel header={'Inverse examples'}>
            <Row>
              <Col lg2 md6 sm12>
                <Button primary
                        inverse
                        label='Primary '
                        onClick={action('clicked')}/>
              </Col>
              <Col lg2 md6 sm12>
                <Button
                  secondary
                  inverse
                  label='secondary '
                  onClick={action('clicked')}
                />
              </Col>
              <Col lg2 md6 sm12>
                <Button
                  warning
                  inverse
                  label='Warning '
                  onClick={action('clicked')}
                />
              </Col>

              <Col lg2 md6 sm12>
                <Button
                  success
                  inverse
                  label='Success'
                  onClick={action('clicked')}
                />
              </Col>
              <Col lg2 md6 sm12>
                <Button
                  danger
                  inverse
                  label='Danger'
                  onClick={action('clicked')}
                />
              </Col>
              <Col lg2 md6 sm12>
                <Button
                  info
                  inverse
                  label='Info'
                  onClick={action('clicked')}
                />
              </Col>
            </Row>
          </Panel>
          <br/>
          <Panel header={'Icon examples'}>
            <Row>
              <Col lg2 md6 sm12>
                <Button primary
                        label='Primary '
                        icon={'user'}
                        onClick={action('clicked')}/>
              </Col>
              <Col lg2 md6 sm12>
                <Button
                  secondary
                  label='secondary'
                  icon={'user'}
                  onClick={action('clicked')}
                />
              </Col>
              <Col lg2 md6 sm12>
                <Button
                  warning
                  label='Warning'
                  icon={'user'}
                  onClick={action('clicked')}
                />
              </Col>

              <Col lg2 md6 sm12>
                <Button
                  success
                  label='Success'
                  icon={'user'}
                  onClick={action('clicked')}
                />
              </Col>
              <Col lg2 md6 sm12>
                <Button
                  danger
                  label='Danger'
                  icon={'user'}
                  onClick={action('clicked')}
                />
              </Col>
              <Col lg2 md6 sm12>
                <Button
                  info
                  label='Info'
                  icon={'user'}
                  onClick={action('clicked')}
                />
              </Col>
            </Row>
          </Panel>
          <br/>
          <Panel header={'Spinner examples'}>
            <Row>
              <Col lg2 md6 sm12>
                <Button primary
                        label='Primary '
                        spinner={true}
                        onClick={action('clicked')}/>
              </Col>
              <Col lg2 md6 sm12>
                <Button
                  secondary
                  label='secondary'
                  spinner={true}
                  onClick={action('clicked')}
                />
              </Col>
              <Col lg2 md6 sm12>
                <Button
                  warning
                  label='Warning'
                  spinner={true}
                  onClick={action('clicked')}
                />
              </Col>

              <Col lg2 md6 sm12>
                <Button
                  success
                  label='Success'
                  spinner={true}
                  onClick={action('clicked')}
                />
              </Col>
              <Col lg2 md6 sm12>
                <Button
                  danger
                  label='Danger'
                  spinner={true}
                  onClick={action('clicked')}
                />
              </Col>
              <Col lg2 md6 sm12>
                <Button
                  info
                  label='Info'
                  spinner={true}
                  onClick={action('clicked')}
                />
              </Col>
            </Row>
          </Panel>
          <br/>
          <Panel header={'Size examples'}>
            <Row>
              <Col lg3 md6 sm12>
                <Button
                  label='Default'
                  onClick={action('clicked')}/>
              </Col>
              <Col lg3 md6 sm12>
                <Button
                  large
                  label='Large'
                  onClick={action('clicked')}
                />
              </Col>
              <Col lg3 md6 sm12>
                <Button
                  small
                  label='Small'
                  onClick={action('clicked')}
                />
              </Col>
              <Col lg3 md6 sm12>
                <Button
                  xSmall
                  label='xSmall'
                  onClick={action('clicked')}
                />
              </Col>
            </Row>
          </Panel>
          <br/>
          <Panel header={'Disabled example'}>
            <Row>
              <Col lg3 md6 sm12>
                <Button
                  label='Default'
                  disabled
                  icon='user'
                  onClick={action('clicked')}/>
              </Col>

            </Row>
          </Panel>
        </div>
    )

);

export default  ButtonStory;