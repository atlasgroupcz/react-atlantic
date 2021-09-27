import React from 'react';
import { Button, PureButton, SimpleButton, ButtonProps } from '..';
import { disableOnEvent, crossOut } from './disableOnEvent';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        isRound: {
            name: 'isRound',
            defaultValue: false,
        },
        isDisabled: {
            name: 'isDisabled',
            defaultValue: false,
        },
        isFullWidth: {
            name: 'isFullWidth',
            defaultValue: false,
        },
        isTransparent: {
            name: 'isTransparent',
            defaultValue: false,
        },
        size: {
            name: 'size',
            defaultValue: 'small',
            control: {
                type: 'select',
            },
        },
        type: {
            name: 'type',
            defaultValue: 'default',
        },
        htmlType: {
            name: 'htmlType',
            defaultValue: 'button',
            control: {
                type: 'select',
            },
        },
        as: crossOut,
        ...disableOnEvent,
    },
};

export const Overview = ({
    isRound,
    isDisabled,
    isFullWidth,
    isTransparent,
    size,
    type,
    htmlType,
}: ButtonProps) => (
    <>
        <Button
            isRound={isRound}
            isDisabled={isDisabled}
            isFullWidth={isFullWidth}
            isTransparent={isTransparent}
            size={size}
            type={type}
            htmlType={htmlType}
        >
            Click me!
        </Button>
        <PureButton
            isRound={isRound}
            isDisabled={isDisabled}
            isFullWidth={isFullWidth}
            isTransparent={isTransparent}
            size={size}
            type={type}
            htmlType={htmlType}
        >
            Click me!
        </PureButton>
        <SimpleButton
            isRound={isRound}
            isDisabled={isDisabled}
            isFullWidth={isFullWidth}
            isTransparent={isTransparent}
            size={size}
            type={type}
            htmlType={htmlType}
        >
            Click me!
        </SimpleButton>
    </>
);
