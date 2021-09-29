import React from 'react';
import { styled, Text as NotStyledText, TextProps } from '..';
import { disable, disableOnEvent } from './disableOnEvent';

const Text = styled(NotStyledText)`
    color: ${({ theme }) => theme.color.text.gamma};
`;

export default {
    title: 'Typography - Text',
    component: Text,
    argTypes: {
        element: { name: 'element', control: { type: 'select' } },
        type: { name: 'type', control: { type: 'select' } },
        level: disable,
        theme: disable,
        as: disable,
        forwardedAs: disable,
        ...disableOnEvent,
    },
};

export const Overview = ({ element, type }: TextProps) => (
    <Text element={element} type={type}>
        Text
    </Text>
);
