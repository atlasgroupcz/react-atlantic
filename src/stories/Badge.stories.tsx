import React from 'react';
import { Badge, BadgeProps } from '..';
import { disableOnEvent } from './disableOnEvent';

export default {
    title: 'Badge',
    component: Badge,
    argTypes: {
        type: {
            name: 'type',
        },
        size: {
            name: 'size',
            control: {
                type: 'select',
            },
        },
        ...disableOnEvent,
    },
};

export const Overview = ({ type, size }: BadgeProps) => (
    <Badge type={type} size={size}>
        {type ?? 'Default'}
    </Badge>
);
