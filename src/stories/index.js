import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import {Icon} from 'fantastic-components';

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to fantastic-components', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Icon', module)
  .add('user icon', () => <Icon iconClass={'user'} foreColor={'#f00'}/>)
  .add('calendar icon', () => <Icon iconClass={'calendar'} foreColor={'green'}/>);
