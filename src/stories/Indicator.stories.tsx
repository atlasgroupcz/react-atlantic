import React from 'react';
import { Indicator, IndicatorProps } from '..';
import { disableOnEvent } from './disableOnEvent';

export default {
    title: 'Indicator',
    component: Indicator,
    argTypes: {
        size: {
            name: 'size',
            control: {
                type: 'select',
            },
            defaultValue: 'small',
        },
        type: {
            name: 'type',
            control: {
                type: 'select',
            },
            defaultValue: 'default',
        },
        ...disableOnEvent,
    },
};

export const Overview = ({ size, type }: IndicatorProps) => (
    <Indicator size={size} type={type} />
);
