import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Checkbox } from '../src/components/Checkbox/view';
import { defaultValues } from './constants';
import { HorizontalPosition } from '../src/types';

const stories = storiesOf('Checkbox', module);

stories.addDecorator(withKnobs);

stories.add(
    'Playground',
    () => {
        const isChecked = boolean(`isChecked:`, defaultValues.isChecked);
        const isDisabled = boolean(`isDisabled:`, defaultValues.isDisabled);
        const isPartiallyChecked = boolean(
            `isPartiallyChecked:`,
            defaultValues.isPartiallyChecked
        );
        const horizontalPosition = select<HorizontalPosition>(
            `Position:`,
            ['left', `right`],
            defaultValues.position as HorizontalPosition
        );
        const children = text(`children:`, defaultValues.children);

        return (
            <Checkbox
                isChecked={isChecked}
                isDisabled={isDisabled}
                isPartiallyChecked={isPartiallyChecked}
                horizontalPosition={horizontalPosition}
            >
                {children}
            </Checkbox>
        );
    },
    {
        info: { inline: true },
    }
);
