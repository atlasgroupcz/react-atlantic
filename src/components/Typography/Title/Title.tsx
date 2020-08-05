import React, { FC, PropsWithChildren, ReactText } from 'react';
import {
    StyledTitle1,
    StyledTitle2,
    StyledTitle3,
    StyledTitle4,
    StyledTitle5,
} from './Title.style';
import { CommonHTMLProps } from '../../../types';

export type TitleLevel = 1 | 2 | 3 | 4 | 5;

export type TitleProps = {
    level?: TitleLevel;
    children: ReactText;
} & CommonHTMLProps<HTMLTitleElement>;

const levels = {
    1: (children: ReactText) => <StyledTitle1>{children}</StyledTitle1>,
    2: (children: ReactText) => <StyledTitle2>{children}</StyledTitle2>,
    3: (children: ReactText) => <StyledTitle3>{children}</StyledTitle3>,
    4: (children: ReactText) => <StyledTitle4>{children}</StyledTitle4>,
    5: (children: ReactText) => <StyledTitle5>{children}</StyledTitle5>,
};

export const Title: FC<PropsWithChildren<TitleProps>> = ({
    level = 1,
    children,
}) => <>{levels[level]?.(children) || levels[1](children)}</>;

Title.displayName = `Title`;
