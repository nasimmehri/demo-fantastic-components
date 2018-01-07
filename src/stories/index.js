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
    .add('primary button size', () => <div>
            <Button
                primary
                large
                label='Large Primary button'
                onClick={action('clicked')}
            /><Button
            primary
            label='
      Default size Primary button'
            onClick={action('clicked')}
        /><Button
            primary
            small
            label='
      Small Primary button'
            onClick={action('clicked')}
        /><Button
            primary
            xSmall
            label='
      Extra small Primary button'
            onClick={action('clicked')}
        />
        </div>
    )

    .add('primary button with icon', () => <div>
            <Button
                primary
                icon={'user'}
                large
                label='Large Primary button'
                onClick={action('clicked')}
            /><Button
            primary
            icon={'user'}
            label='
      Default size Primary button'
            onClick={action('clicked')}
        /><Button
            primary
            icon={'user'}
            small
            label='
      Small Primary button'
            onClick={action('clicked')}
        /><Button
            primary
            icon={'user'}
            xSmall
            label='
      Extra small Primary button'
            onClick={action('clicked')}
        />
        </div>
    )
    .add('secondary button size', () => <div>
            <Button
                secondary
                large
                label='Large secondary button'
                onClick={action('clicked')}
            /><Button
        secondary
            label='
      Default size secondary button'
            onClick={action('clicked')}
        /><Button
        secondary
            small
            label='
      Small secondary button'
            onClick={action('clicked')}
        /><Button
        secondary
            xSmall
            label='
      Extra small secondary button'
            onClick={action('clicked')}
        />
        </div>
    )

    .add('info button size', () => <div>
            <Button
                info
                large
                label='Large info button'
                onClick={action('clicked')}
            /><Button
            info
            label='
      Default size info button'
            onClick={action('clicked')}
        /><Button
            info
            small
            label='
      Small info button'
            onClick={action('clicked')}
        /><Button
            info
            xSmall
            label='
      Extra small info button'
            onClick={action('clicked')}
        />
        </div>
    )

    .add('warning button size', () => <div>
            <Button
                warning
                large
                label='Large warning button'
                onClick={action('clicked')}
            /><Button
        warning
            label='
      Default size warning button'
            onClick={action('clicked')}
        /><Button
        warning
            small
            label='
      Small warning button'
            onClick={action('clicked')}
        /><Button
        warning
            xSmall
            label='
      Extra small warning button'
            onClick={action('clicked')}
        />
        </div>
    )

    .add('danger button size', () => <div>
            <Button
                danger
                large
                label='Large danger button'
                onClick={action('clicked')}
            /><Button
        danger
            label='
      Default size danger button'
            onClick={action('clicked')}
        /><Button
        danger
            small
            label='
      Small danger button'
            onClick={action('clicked')}
        /><Button
        danger
            xSmall
            label='
      Extra small danger button'
            onClick={action('clicked')}
        />
        </div>
    )

    .add('success button size', () => <div>
            <Button
                success
                large
                label='Large success button'
                onClick={action('clicked')}
            /><Button
        success
            label='
      Default size success button'
            onClick={action('clicked')}
        /><Button
        success
            small
            label='
      Small success button'
            onClick={action('clicked')}
        /><Button
        success
            xSmall
            label='
      Extra small success button'
            onClick={action('clicked')}
        />
        </div>
    )

    .add('inverse primary button size', () => <div>
            <Button
                success
                inverse
                large
                label='Large inverse button'
                onClick={action('clicked')}
            /><Button
        primary
            label='
      Default size inverse primary button'
            onClick={action('clicked')}
        /><Button
        primary
            inverse
            small
            label='
      Small inverse primary button'
            onClick={action('clicked')}
        /><Button
        primary
            inverse
            xSmall
            label='
      Extra small inverse primary button'
            onClick={action('clicked')}
        />
        </div>
    )

    .add('inverse success button size', () => <div>
            <Button
                success
                inverse
                large
                label='Large inverse button'
                onClick={action('clicked')}
            /><Button
            success
            label='
      Default size inverse success button'
            onClick={action('clicked')}
        /><Button
            success
            inverse
            small
            label='
      Small inverse success button'
            onClick={action('clicked')}
        /><Button
            success
            inverse
            xSmall
            label='
      Extra small inverse success button'
            onClick={action('clicked')}
        />
        </div>
    )

;
