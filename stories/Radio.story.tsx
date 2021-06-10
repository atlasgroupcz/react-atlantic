import React from 'react';
import { storiesOf } from '@storybook/react';
import { Size } from '../src';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { RadioButtons, RadioCircular } from '../src/components/Radio';
import { useRadioButtonWithState } from '../src/components/Radio';
import { defaultValues } from './constants';

const stories = storiesOf('Radio', module);

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

        const demoRadioHandlers = useRadioButtonWithState({
            values: [
                { value: 'firstValue', label: 'Label 1' },
                { value: 'secondValue', label: 'Label 2' },
            ],
            groupName: 'firstGroup',
            defaultValue,
            isFullWidth,
            onChange: (event) => console.log(event.currentTarget.value),
        });

        return (
            <>
                <RadioButtons {...demoRadioHandlers} />
                <RadioCircular {...demoRadioHandlers} />
            </>
        );
    },
    {
        info: { inline: true },
    }
);
