import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { DatePicker } from '../src/components/Datepicker';
import { DatePickerFirstDemo } from './demos/DatePicker';

const stories = storiesOf('DatePicker', module);

stories.addDecorator(withKnobs);

stories.add('Overview', () => <>{DatePickerFirstDemo()}</>, {
    info: { inline: true },
});

stories.add(
    'Playground',
    () => {
        const datePicker = <DatePicker />;
        return datePicker;
    },
    {
        info: { inline: true },
    }
);
