import React from 'react';
import { ProgressCircle, ProgressCirleProps } from '..';
import { crossOut, disableOnEvent } from './disableOnEvent';

export default {
    title: 'ProgressCircle',
    component: ProgressCircle,
    argTypes: {
        value: {
            name: 'value',
            control: {
                type: 'number',
                min: 0,
                max: 100,
            },
            defaultValue: 0,
        },
        circleSize: {
            name: 'circleSize',
            control: {
                type: 'number',
                min: 0,
                max: 100,
            },
            defaultValue: 100,
        },
        transitionColors: crossOut,
        failed: { name: 'failed', defaultValue: false },
        ...disableOnEvent,
    },
};

export const Overview = ({ value, circleSize, failed }: ProgressCirleProps) => (
    <ProgressCircle circleSize={circleSize} value={value} failed={failed} />
);
