/* eslint-disable jsx-a11y/accessible-emoji */
import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { LightMessage } from '../src/components/Message';
import { Message } from '../src/components/Message/view/Default';

const stories = storiesOf('Message', module);

stories.addDecorator(withKnobs);

stories.add(
    'Playground',
    () => {
        const type = select(
            `type:`,
            ['default', 'primary', 'success', 'warning', 'error', 'info'],
            'default'
        );

        return (
            <>
                <Message type={type}>Hello world!</Message>
                <br />
                <LightMessage type={type}>Hello world!</LightMessage>
            </>
        );
    },
    {
        info: { inline: true },
    }
);
//
