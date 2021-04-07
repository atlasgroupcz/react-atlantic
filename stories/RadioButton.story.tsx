import React from 'react';
import { storiesOf } from '@storybook/react';
import { Size } from '../src';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { RadioButtonsView } from '../src/components/RadioButton';
import { useRadioButtonsWithState } from '../src/components/RadioButton/hooks/useRadioButtonsWithState';
import { defaultValues } from './constants';

const stories = storiesOf('Radio Buttons', module);

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

        const demoRadioButtonsHandlers = useRadioButtonsWithState({
            values: [
                { value: 'firstValue', label: 'Label 1' },
                { value: 'secondValue', label: 'Label 2' },
            ],
            groupName: 'firstGroup',
            defaultValue,
            isFullWidth,
        });

        return <RadioButtonsView {...demoRadioButtonsHandlers} />;
    },
    {
        info: { inline: true },
    }
);
