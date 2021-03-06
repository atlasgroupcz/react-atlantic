import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { DatePickerFirstDemo } from './demos/DatePicker';
import { StyledStory } from './style';

const stories = storiesOf('DatePicker', module);

stories.addDecorator(withKnobs);

stories.add(
    'Overview',
    () => <StyledStory>{DatePickerFirstDemo()}</StyledStory>,
    {
        info: { inline: true },
    }
);
