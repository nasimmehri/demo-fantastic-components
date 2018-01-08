import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Container, Tab, Row, Col, Panel} from 'fantastic-components';
const tabs = [
  {title: 'Tab 1', content: (<div> Contetnt 1</div>)},
  {
    title: 'Tab 2', content: (<div> Content 2</div>)
  },
  {
    title: 'Tab 3', content: (<div> Content 3</div>)
  }
];
const TabStory = (storiesOf('Tab', module)
    .add(
      'Selected Examples',
      () =>
        <div>

          <Panel header={'Simple example'}>
            <Tab
              tabs={tabs}
              currentTab={2}
            />
          </Panel>
          <br/>
          <Panel header={'Primary example'}>
            <Tab
              tabs={tabs}
              currentTab={2}
              primary
            />
          </Panel>
          <br/>
          <Panel header={'Secondary example'}>
            <Tab
              tabs={tabs}
              currentTab={2}
              secondary
            />
          </Panel>
          <br/>
          <Panel header={'Info example'}>
            <Tab
              tabs={tabs}
              currentTab={2}
              info
            />
          </Panel>
          <br/>
          <Panel header={'Warning example'}>
            <Tab
              tabs={tabs}
              currentTab={2}
              warning
            />
          </Panel>
          <br/>
          <Panel header={'Danger example'}>
            <Tab
              tabs={tabs}
              currentTab={2}
              danger
            />
          </Panel>
          <br/>
          <Panel header={'Success example'}>
            <Tab
              tabs={tabs}
              currentTab={2}
              success
            />
          </Panel>
        </div>
    )

);

export default  TabStory;