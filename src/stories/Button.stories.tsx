import React from 'react';
import { Button, PureButton, SimpleButton, ButtonProps } from '..';
import { disableOnEvent } from './disableOnEvent';

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
        as: {
            name: 'as',
            control: {
                type: 'text',
            },
        },
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
    as,
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
            as={as}
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
            as={as}
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
            as={as}
        >
            Click me!
        </SimpleButton>
    </>
);
