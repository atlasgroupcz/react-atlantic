/* eslint-disable jsx-a11y/accessible-emoji */
import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Message, MessageLight } from '../src/components/Message';

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
                <Message type={type} isReversedColor>
                    Hello world!
                </Message>
                <br />
                <Message type={type}>Hello world!</Message>
                <br />
                <MessageLight type={type}>Hello world!</MessageLight>
            </>
        );
    },
    {
        info: { inline: true },
    }
);
//
