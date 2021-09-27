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
        },
        type: {
            name: 'type',
            control: {
                type: 'select',
            },
        },
        ...disableOnEvent,
    },
};

export const Overview = ({ size, type }: IndicatorProps) => (
    <Indicator size={size} type={type} />
);
