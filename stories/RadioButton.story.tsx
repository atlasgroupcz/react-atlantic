import React from 'react';
import { storiesOf } from '@storybook/react';
import { Size } from '../src';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { RadioButton } from '../src/components/RadioButton';
import { useRadioButtonWithState } from '../src/components/RadioButton';
import { defaultValues } from './constants';

const stories = storiesOf('RadioButton', module);

stories.addDecorator(withKnobs);

stories.add(
    'Playground',
    () => {
        const defaultValue: Size = select(
            `defaultValue:`,
            ['firstValue', `secondValue`],
            defaultValues.firstValue
        ) as Size;

        const isFullWidth = boolean(`isFullWidth:`, defaultValues.isFullWidth);

        const demoRadioButtonHandlers = useRadioButtonWithState({
            values: [
                { value: 'firstValue', label: 'Label 1' },
                { value: 'secondValue', label: 'Label 2' },
            ],
            groupName: 'firstGroup',
            defaultValue,
            isFullWidth,
            onChange: (event) => console.log(event.currentTarget.value),
        });

        return <RadioButton {...demoRadioButtonHandlers} />;
    },
    {
        info: { inline: true },
    }
);
