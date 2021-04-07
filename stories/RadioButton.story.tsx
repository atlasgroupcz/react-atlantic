import React from 'react';
import { storiesOf } from '@storybook/react';
import { Select, Size } from '../src';
import { select, withKnobs } from '@storybook/addon-knobs';
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

        const demoRadioButtonsHandlers = useRadioButtonsWithState({
            values: [
                { value: 'firstValue', label: 'Label 1' },
                { value: 'secondValue', label: 'Label 2' },
            ],
            defaultValue,
            groupName: 'firstGroup',
        });

        return (
            <>
                <RadioButtonsView isFullWidth {...demoRadioButtonsHandlers} />
            </>
        );
    },
    {
        info: { inline: true },
    }
);
