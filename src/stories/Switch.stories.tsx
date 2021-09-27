import React from 'react';
import { Switch, SwitchProps, useSwitch, wrap } from '..';
import { disableOnEvent, crossOut } from './disableOnEvent';

export default {
    title: 'Switch',
    component: Switch,
    argTypes: {
        isDisabled: {
            name: 'isDisabled',
            defaultValue: false,
        },
        isPartiallyChecked: {
            name: 'isPartiallyChecked',
            defaultValue: false,
        },
        type: crossOut,
        isChecked: crossOut,
        textOn: crossOut,
        textOff: crossOut,
        horizontalPosition: crossOut,
        ...disableOnEvent,
    },
};

export const Overview = ({ isDisabled, isPartiallyChecked }: SwitchProps) => {
    // you have to wrap checkbox with useCheckbox hook, react-wrap is recommended for this
    const WrappedSwitch = wrap(Switch, useSwitch);

    return (
        <WrappedSwitch
            isDisabled={isDisabled}
            isPartiallyChecked={isPartiallyChecked}
        />
    );
};
