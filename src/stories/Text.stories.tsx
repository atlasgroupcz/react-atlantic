import React from 'react';
import { Text, TextProps } from '..';
import { crossOut, disableOnEvent } from './disableOnEvent';

export default {
    title: 'Typography',
    component: Text,
    argTypes: {
        element: { name: 'element', control: { type: 'select' } },
        level: {
            name: 'level',
            control: {
                type: 'number',
                min: 1,
                max: 5,
            },
            defaultValue: 1,
        },
        theme: crossOut,
        as: crossOut,
        forwardedAs: crossOut,
        type: crossOut,
        ...disableOnEvent,
    },
};

export const TextOverview = ({ element, type }: TextProps) => (
    <Text element={element} type={type}>
        Text
    </Text>
);
