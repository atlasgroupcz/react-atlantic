import React from 'react';
import styled from 'styled-components';
import { Title as NotStyledTitle, TitleProps } from '..';
import { disableOnEvent } from './disableOnEvent';

const Title = styled(NotStyledTitle)`
    color: ${({ theme }) => theme.color.text.gamma};
`;

export default {
    title: 'Typography - Title',
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

export const Overview = ({ level }: TitleProps) => (
    <Title level={level}>Title</Title>
);
