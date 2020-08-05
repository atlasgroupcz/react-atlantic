import { select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Badge } from '../src/components/Badge/Badge';

const stories = storiesOf('Badge', module);

stories.addDecorator(withKnobs);

stories.add(
    'Playground',
    () => {
        const type = select(
            `type:`,
            ['default', 'primary', 'success', 'warning', 'error'],
            'default'
        );

        const size = select(`size:`, ['small', `medium`, 'large'], 'small');

        const children = text(`children:`, ``);

        return (
            <Badge type={type} size={size}>
                {children}
            </Badge>
        );
    },
    {
        info: { inline: true },
    }
);
