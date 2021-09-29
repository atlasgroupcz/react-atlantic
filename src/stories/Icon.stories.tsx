import React from 'react';
import {
    Icon as NotStyledIcon,
    IconProps,
    IconsMap,
    IconName,
    Text as NotStyledText,
} from '..';
import { disableOnEvent } from './disableOnEvent';
import styled from 'styled-components';

const icons = Object.keys(IconsMap) as IconName[];

const Icon = styled(NotStyledIcon)`
    color: ${({ theme }) => theme.color.text.gamma};
`;

const Text = styled(NotStyledText)`
    color: ${({ theme }) => theme.color.text.gamma};
    margin-left: ${({ theme }) => theme.margin.md};
`;

const StyledIconsContainer = styled.div`
    display: flex;
    align-items: center;
`;

export default {
    title: 'Icon',
    component: NotStyledIcon,
    argTypes: {
        name: {
            name: 'name',
            control: {
                type: 'select',
            },
            defaultValue: 'info',
        },
        isRotating: { name: 'isRotating' },
        ...disableOnEvent,
    },
};

export const Overview = ({ name, isRotating }: IconProps) => (
    <Icon name={name} isRotating={isRotating} />
);

export const Icons = () =>
    icons.sort().map((key) => (
        <StyledIconsContainer key={key}>
            <Icon name={key} />
            <Text>{key}</Text>
        </StyledIconsContainer>
    ));
