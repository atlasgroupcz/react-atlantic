import React from 'react';
import { Icon, IconProps, IconsMap, Message, MessageViewProps } from '..';
import { disable, disableOnEvent } from './disableOnEvent';

const options = Object.entries(IconsMap).map(([key]) => key);

export default {
    title: 'Message',
    component: Message,
    argTypes: {
        type: {
            name: 'type',
            control: {
                type: 'select',
                defaultValue: 'default',
            },
        },
        IconName: {
            name: 'Icon',
            control: {
                type: 'select',
            },
            options: options,
        },
        Icon: disable,
        isReversedColor: {
            name: 'isReversedColor',
            defaultValue: false,
        },
        innerRef: disable,
        ...disableOnEvent,
    },
};

export const Overview = ({
    type,
    isReversedColor,
    IconName,
}: MessageViewProps & { IconName: IconProps['name'] }) => (
    <Message
        type={type}
        isReversedColor={isReversedColor}
        Icon={IconName && <Icon name={IconName} />}
    >
        {type}
    </Message>
);
