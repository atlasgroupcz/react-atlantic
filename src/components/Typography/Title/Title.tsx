import React, { FC, PropsWithChildren, ReactText } from 'react';
import {
    StyledTitle1,
    StyledTitle2,
    StyledTitle3,
    StyledTitle4,
    StyledTitle5,
} from './styles';
import { ElementProps } from '../../../types/utils';

export type TitleLevel = 1 | 2 | 3 | 4 | 5;

export type TitleProps = {
    level?: TitleLevel;
    children: ReactText;
} & ElementProps<HTMLHeadingElement>;

const levels = {
    1: (children: ReactText, props: ElementProps<HTMLHeadingElement>) => (
        <StyledTitle1 {...props}>{children}</StyledTitle1>
    ),
    2: (children: ReactText, props: ElementProps<HTMLHeadingElement>) => (
        <StyledTitle2 {...props}>{children}</StyledTitle2>
    ),
    3: (children: ReactText, props: ElementProps<HTMLHeadingElement>) => (
        <StyledTitle3 {...props}>{children}</StyledTitle3>
    ),
    4: (children: ReactText, props: ElementProps<HTMLHeadingElement>) => (
        <StyledTitle4 {...props}>{children}</StyledTitle4>
    ),
    5: (children: ReactText, props: ElementProps<HTMLHeadingElement>) => (
        <StyledTitle5 {...props}>{children}</StyledTitle5>
    ),
};

export const Title: FC<PropsWithChildren<TitleProps>> = ({
    level = 1,
    children,
    ...props
}) => <>{levels[level]?.(children, props) || levels[1](children, props)}</>;

Title.displayName = `Title`;
