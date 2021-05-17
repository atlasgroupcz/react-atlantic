import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Indicator } from '../src/components';

const stories = storiesOf('Indicator', module);

stories.addDecorator(withKnobs);

stories.add(
    'Playground',
    () => {
        const type = select(
            `type:`,
            ['default', 'primary', 'success', 'warning', 'error', 'info'],
            'default'
        );

        const size = select(`size:`, ['small', `medium`, 'large'], 'small');

        return <Indicator type={type} size={size} />;
    },
    {
        info: { inline: true },
    }
);
