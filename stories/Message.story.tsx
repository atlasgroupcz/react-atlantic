/* eslint-disable jsx-a11y/accessible-emoji */
import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Text } from '../src';
import { Message } from '../src/components/Message';

const stories = storiesOf('Message', module);

stories.addDecorator(withKnobs);

stories.add(
    'Playground',
    () => {
        const type = select(
            `type:`,
            ['default', 'primary', 'success', 'warning', 'error'],
            'default'
        );

        return (
            <Message type={type}>
                <Text>Hello world!</Text>
            </Message>
        );
    },
    {
        info: { inline: true },
    }
);
//
