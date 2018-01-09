import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Container, SelectInput, Row, Col, Panel} from 'fantastic-components';
let options = [
  {
    value: '1',
    text: 'Java'
  },
  {
    value: '2',
    text: 'Javascript'
  },
  {
    value: '3',
    text: 'C#'
  }
];
const SelectInputStory = (storiesOf('SelectInput', module)
    .add(
      'Selected Examples',
      () =>
        <div>
          <Panel header={'Simple examples'}>
            <Row>
              <Col lg4>
                <SelectInput
                  label={'Primary '}
                  primary
                  options={options}
                  defaultOption={'Nothing'}
                  defaultValue={'0'}
                  onChange={action('onChange')}
                />
              </Col>
              <Col lg4>
                <SelectInput
                  label={'Secondary'}
                  secondary
                  options={options}
                  defaultOption={'Nothing'}
                  defaultValue={'0'}
                  onChange={action('onChange')}
                />
              </Col>
              <Col lg4>
                <SelectInput options={options}
                             label={'Warning'}
                             warning
                             defaultOption={'Nothing'}
                             defaultValue={'0'}
                             onChange={action('onChange')}
                />
              </Col>
              <Col lg4>
                <SelectInput options={options}
                             label={'Info'}
                             info
                             defaultOption={'Nothing'}
                             defaultValue={'0'}
                             onChange={action('onChange')}
                />
              </Col>
              <Col lg4>
                <SelectInput options={options}
                             label={'Danger'}
                             danger
                             defaultOption={'Nothing'}
                             defaultValue={'0'}
                             onChange={action('onChange')}
                />
              </Col>
              <Col lg4>
                <SelectInput options={options}
                             label={'Success'}
                             success
                             defaultOption={'Nothing'}
                             defaultValue={'0'}
                             onChange={action('onChange')}
                />
              </Col>

            </Row>
          </Panel>
          <br/>

          {/* <Panel header={'Icon examples'}>
           <Row>
           <Col lg4>
           <SelectInput
           label={'primary with icon'}
           primary
           icon={'user'}
           onChange={action('onChange')}
           options={options}
           defaultOption={'Nothing'}
           defaultValue={'0'}
           />
           </Col>
           <Col lg4>
           <SelectInput
           label={'secondary with icon'}
           secondary
           icon={'user'}
           onChange={action('onChange')}
           options={options}
           defaultOption={'Nothing'}
           defaultValue={'0'}
           />
           </Col>
           <Col lg4>
           <SelectInput
           label={'warning with icon'}
           warning
           icon={'user'}
           onChange={action('onChange')}
           options={options}
           defaultOption={'Nothing'}
           defaultValue={'0'}
           />
           </Col>
           <Col lg4>
           <SelectInput
           label={'info with icon'}
           info
           icon={'user'}
           onChange={action('onChange')}
           options={options}
           defaultOption={'Nothing'}
           defaultValue={'0'}
           />
           </Col>
           <Col lg4>
           <SelectInput placeholder={'danger with icon'}
           label={'danger with icon'}
           danger
           icon={'user'}
           onChange={action('onChange')}
           options={options}
           defaultOption={'Nothing'}
           defaultValue={'0'}
           />
           </Col>
           <Col lg4>
           <SelectInput placeholder={'success with icon'}
           label={'success with icon'}
           success
           icon={'user'}
           onChange={action('onChange')}
           options={options}
           defaultOption={'Nothing'}
           defaultValue={'0'}
           />
           </Col>

           </Row>
           </Panel>*/}
          <br/>
          <Row>
            <Col lg6>
              <Panel header={'Error example'}>
                <SelectInput options={options}
                             label={'SelectInput with error props'}
                             onChange={action('onChange')}
                             errorText={'Error!!!'}
                             defaultOption={'Nothing'}
                             defaultValue={'0'}
                />
              </Panel>
            </Col>
            <Col lg6>
              <Panel header={'Disabled examples'}>
                <SelectInput options={options}
                             label={'SelectInput with Disabled props'}
                             disabled
                             onChange={action('onChange')}
                             defaultOption={'Nothing'}
                             defaultValue={'0'}
                />
              </Panel>
              <br/>
            </Col>
          </Row>

        </div>
    )
);

export default  SelectInputStory;