import React from 'react';
import { TextArea, TextAreaProps } from '..';
import { disableOnEvent } from './disableOnEvent';

export default {
    title: 'TextArea',
    component: TextArea,
    argTypes: {
        isFullWidth: {
            name: 'isFullWidth',
            defaultValue: false,
        },
        isDisabled: {
            name: 'isDisabled',
            defaultValue: false,
        },
        allowResize: {
            nane: 'allowResize',
            defaultValue: false,
        },
        size: {
            name: 'size',
            defaultValue: 'medium',
            control: {
                type: 'select',
            },
        },
        ...disableOnEvent,
    },
};

export const Overview = ({
    isFullWidth,
    isDisabled,
    allowResize,
    size,
}: TextAreaProps) => (
    <TextArea
        isFullWidth={isFullWidth}
        isDisabled={isDisabled}
        allowResize={allowResize}
        size={size}
    />
);
