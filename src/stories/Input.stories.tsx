import React from 'react';
import { Input, InputProps } from '..';
import { disableOnEvent, crossOut } from './disableOnEvent';

export default {
    title: 'Input',
    component: Input,
    argTypes: {
        size: {
            name: 'size',
            control: {
                type: 'select',
            },
        },
        isRound: {
            name: 'isRound',
            defaultValue: false,
        },
        isDisabled: {
            name: 'isDisabled',
            defaultValue: false,
        },
        isFullWidth: {
            name: 'isFullWidth',
            defaultValue: false,
        },
        htmlType: crossOut,
        prefix: crossOut,
        suffix: crossOut,
        ...disableOnEvent,
    },
};

export const Overview = ({
    size,
    isRound,
    isDisabled,
    isFullWidth,
}: InputProps) => (
    <Input
        size={size}
        isRound={isRound}
        isDisabled={isDisabled}
        isFullWidth={isFullWidth}
        htmlType="text"
    />
);
