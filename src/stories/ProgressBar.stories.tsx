import React from 'react';
import { ProgressBar, ProgressBarProps } from '..';
import { crossOut, disableOnEvent } from './disableOnEvent';

export default {
    title: 'ProgressBar',
    component: ProgressBar,
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
        transitionColors: crossOut,
        failed: { name: 'failed', defaultValue: false },
        ...disableOnEvent,
    },
};

export const Overview = ({ value, failed }: ProgressBarProps) => (
    <ProgressBar value={value} failed={failed} />
);
