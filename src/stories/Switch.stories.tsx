import React from 'react';
import { Switch as SwitchView, SwitchProps, useSwitch } from '..';
import { disableOnEvent, crossOut, disable } from './disableOnEvent';
import { wrap } from '@atlasgroup/react-wrap';

const Switch = wrap(SwitchView, useSwitch);

export default {
    title: 'Switch',
    component: Switch,
    argTypes: {
        isDisabled: {
            name: 'isDisabled',
            control: { type: 'boolean' },
            defaultValue: false,
        },
        isPartiallyChecked: {
            name: 'isPartiallyChecked',
            control: { type: 'boolean' },
            defaultValue: false,
        },
        type: disable,
        isChecked: disable,
        textOn: disable,
        textOff: disable,
        horizontalPosition: disable,
        ...disableOnEvent,
    },
};

export const Overview = ({ isDisabled, isPartiallyChecked }: SwitchProps) => (
    <Switch isDisabled={isDisabled} isPartiallyChecked={isPartiallyChecked} />
);
