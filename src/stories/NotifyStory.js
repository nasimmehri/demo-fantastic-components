import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Container, Notify, Row, Col, Panel} from 'fantastic-components';
const NotifyStory = (storiesOf(' Notify', module)
    .add(
      'Selected Examples',
      () =>
        <Row>


          <Notify
            position="top left"
            primary
            title="Primary Notify"
            time={5000}
            msg="This notification will hide in 5s "
          />


          <Notify
            position="top right"
            secondary
            title="Secondary Notify"
            time={9000}
            msg="This notification will hide in 9s "
          />

          <Notify
            position="top center"
            info
            title="Info Notify"
            time={12000}
            msg="This notification will hide in 12s "
          />

          <Notify
            position="bottom left"
            success
            title="Success Notify"
            time={15000}
            msg="This notification will hide in 15s "
          />

          <Notify
            position="bottom right"
            danger
            title="Danger Notify"
            time={18000}
            msg="This notification will hide in 18s "
          />

          <Notify
            position="bottom center"
            secondary
            title="Secondary Notify"
            time={21000}
            msg="This notification will hide in 21s "
          />

          <Notify
            position="middle center"
            primary
            title="Primary Notify"
            time={24000}
            msg="This notification will hide in 24s "
          />

          <Notify
            position="middle left"
            info
            title="Info Notify"
            time={27000}
            msg="This notification will hide in 27s "
          />


          <Notify
            position="middle right"
            secondary
            title="Secondary Notify"
            time={30000}
            msg="This notification will hide in 30s "
          />


        </Row>
    )

);

export default  NotifyStory;