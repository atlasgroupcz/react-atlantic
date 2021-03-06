import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { defaultValues } from './constants';
import { Type } from '../src';
import { Switch } from '../src/components/Switch';

const stories = storiesOf('Switch', module);

stories.addDecorator(withKnobs);

stories.add(
    'Playground',
    () => {
        const isChecked = boolean(`isChecked:`, defaultValues.isChecked);
        const isPartiallyChecked = boolean(
            `isPartiallyChecked:`,
            defaultValues.isPartiallyChecked
        );
        const isDisabled = boolean(`isDisabled:`, defaultValues.isDisabled);
        const type = select(
            `type:`,
            ['success', 'warning', 'error', 'primary', 'default'],
            defaultValues.type
        ) as Type;

        const textOn = text(`textOn:`, '');
        const textOff = text(`textOff:`, '');

        return (
            <Switch
                isChecked={isChecked}
                isPartiallyChecked={isPartiallyChecked}
                isDisabled={isDisabled}
                type={type}
                textOn={textOn}
                textOff={textOff}
            />
        );
    },
    {
        info: { inline: true },
    }
);
