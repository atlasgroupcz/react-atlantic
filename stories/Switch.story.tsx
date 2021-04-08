import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { defaultValues } from './constants';
import { Type, Size } from '../src';
import { Switch } from '../src/components/Switch';

const stories = storiesOf('Switch', module);

stories.addDecorator(withKnobs);

stories.add(
    'Playground',
    () => {
        const isChecked = boolean(`isChecked:`, defaultValues.isChecked);
        const isDisabled = boolean(`isDisabled:`, defaultValues.isDisabled);
        const type = select(
            `type:`,
            ['success', 'warning', 'error', 'primary', 'default'],
            defaultValues.type
        ) as Type;
        const size = select(
            `size:`,
            ['small', 'medium', 'large'],
            defaultValues.size
        ) as Size;
        const textOn = text(`textOn:`, '');
        const textOff = text(`textOff:`, '');

        return (
            <Switch
                isChecked={isChecked}
                isDisabled={isDisabled}
                type={type}
                textOn={textOn}
                textOff={textOff}
                size={size}
            />
        );
    },
    {
        info: { inline: true },
    }
);
