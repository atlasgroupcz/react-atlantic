import React from 'react';
import { Skeleton, SkeletonProps } from '..';
import { disableOnEvent, crossOut, disable } from './disableOnEvent';

export default {
    title: 'Skeleton',
    component: Skeleton,
    argTypes: {
        height: {
            name: 'height',
            control: {
                type: 'number',
            },
            defaultValue: 30,
        },
        width: {
            name: 'width',
            control: {
                type: 'number',
            },
            defaultValue: 30,
        },
        shape: { name: 'shape', control: { type: 'select' } },
        size: disable,
        className: disable,
        bgColor: { name: 'bgColor' },
        animationColors: crossOut,
        ...disableOnEvent,
    },
};

export const Overview = ({ height, width, shape, bgColor }: SkeletonProps) => (
    <Skeleton height={height} width={width} shape={shape} bgColor={bgColor} />
);
