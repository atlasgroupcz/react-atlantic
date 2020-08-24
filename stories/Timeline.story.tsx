import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { FirstTimelineDemo } from '../src/components/Timeline/demo';

const stories = storiesOf('Timeline', module);

stories.addDecorator(withKnobs);

stories.add('Overview', () => <>{FirstTimelineDemo()}</>, {
    info: { inline: true },
});

stories.add(
    'Playground',
    () => {
        return FirstTimelineDemo();
    },
    {
        info: { inline: true },
    }
);
