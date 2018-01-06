import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import {Icon, Button, Input} from 'fantastic-components';

/*import {Button, Welcome} from '@storybook/react/demo';

storiesOf('Welcome', module).add('to fantastic-components', () => <Welcome showApp={linkTo('Button')}/>);*/

storiesOf('Icon', module)
    .add('user icon', () => <Icon iconClass={'user'} foreColor={'#f00'}/>)
    .add('calendar icon', () => <Icon iconClass={'calendar'} foreColor={'green'}/>);

storiesOf('Input', module)
    .add('default input', () => <Input
        onChange={action('Changed')
        }
    />)
    .add('input with icon', () => <Input
        icon={'user'}
        placeholder={'input with icon'}
    />)
    .add('primary input', () => <Input
        primary
        placeholder={'primary'}
    />)
    .add('secondary input', () => <Input
        placeholder={'secondary'}
        noMargin
    />);

storiesOf('Button', module)
    .add('primary button', () => <Button
        primary
        label="primary button"
        onClick={action('clicked')}
    />)
    .add('secondary button', () => <Button
        secondary
        label="secondary button"
        onClick={action('clicked')}
    />)
    .add('info button', () => <Button
        secondary
        label="info button"
        onClick={action('clicked')}
    />)
    .add('warning button', () => <Button
        secondary
        label="warning button"
        onClick={action('clicked')}
    />)
    .add('danger button', () => <Button
        secondary
        label="danger button"
        onClick={action('clicked')}
    />)
    .add('success button', () => <Button
        secondary
        label="success button"
        onClick={action('clicked')}
    />)
    .add('inverse button', () => <Button
        secondary
        label="inverse button"
        onClick={action('clicked')}
    />)
;
