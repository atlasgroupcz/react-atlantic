import React from 'react';
import { Title, TitleProps } from '..';
import { disableOnEvent } from './disableOnEvent';

export default {
    title: 'Typography',
    component: Title,
    argTypes: {
        level: {
            name: 'level',
            control: {
                type: 'number',
                min: 1,
                max: 5,
            },
            defaultValue: 1,
        },
        ...disableOnEvent,
    },
};

export const TitleOverview = ({ level }: TitleProps) => (
    <Title level={level}>Title</Title>
);
