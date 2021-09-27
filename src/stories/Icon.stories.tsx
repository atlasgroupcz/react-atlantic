import React from 'react';
import { Icon, IconProps } from '..';
import { disableOnEvent } from './disableOnEvent';

export default {
    title: 'Icon',
    component: Icon,
    argTypes: {
        name: {
            name: 'name',
            control: {
                type: 'select',
                defaultValue: false,
            },
        },
        isRotating: { name: 'isRotating' },
        ...disableOnEvent,
    },
};

export const Overview = ({ name, isRotating }: IconProps) => (
    <Icon name={name} isRotating={isRotating} />
);
