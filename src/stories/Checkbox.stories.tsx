import React from 'react';
import { Checkbox, CheckboxProps, useCheckbox, wrap } from '..';
import { crossOut, disableOnEvent } from './disableOnEvent';

export default {
    title: 'Checkbox',
    component: Checkbox,
    argTypes: {
        isDisabled: {
            name: 'isDisabled',
            defaultValue: false,
        },
        size: crossOut,
        isPartiallyChecked: crossOut,
        isChecked: crossOut,
        horizontalPosition: crossOut,
        ...disableOnEvent,
    },
};

export const Overview = ({ isDisabled }: CheckboxProps) => {
    // you have to wrap checkbox with useCheckbox hook, react-wrap is recommended for this
    const WrappedCheckbox = wrap(Checkbox, useCheckbox);

    return (
        <WrappedCheckbox isDisabled={isDisabled}>Change me!</WrappedCheckbox>
    );
};
