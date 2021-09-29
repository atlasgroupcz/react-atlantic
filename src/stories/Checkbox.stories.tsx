import React from 'react';
import { Checkbox as CheckboxView, CheckboxProps, useCheckbox } from '..';
import { crossOut, disableOnEvent } from './disableOnEvent';
import { wrap } from '@atlasgroup/react-wrap';

const Checkbox = wrap(CheckboxView, useCheckbox);

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
    return <Checkbox isDisabled={isDisabled}>Change me!</Checkbox>;
};
