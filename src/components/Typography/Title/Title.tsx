import React, {
    FC,
    forwardRef,
    MutableRefObject,
    PropsWithChildren,
    ReactText,
} from 'react';
import {
    StyledTitle1,
    StyledTitle2,
    StyledTitle3,
    StyledTitle4,
    StyledTitle5,
} from './styles';
import { ElementProps } from '../../../types/utils';
import { MouseEvents } from '../../../types';

export type TitleLevel = 1 | 2 | 3 | 4 | 5;

export type TitleProps = {
    level?: TitleLevel;
    children: ReactText;
} & ElementProps<HTMLHeadingElement> &
    MouseEvents<HTMLHeadingElement>;

type TitleRefType =
    | ((instance: HTMLHeadingElement | null) => void)
    | MutableRefObject<HTMLHeadingElement | null>
    | null;

const levels = {
    1: (
        children: ReactText,
        props: ElementProps<HTMLHeadingElement>,
        ref: TitleRefType
    ) => (
        <StyledTitle1 {...props} ref={ref}>
            {children}
        </StyledTitle1>
    ),
    2: (
        children: ReactText,
        props: ElementProps<HTMLHeadingElement>,
        ref: TitleRefType
    ) => (
        <StyledTitle2 {...props} ref={ref}>
            {children}
        </StyledTitle2>
    ),
    3: (
        children: ReactText,
        props: ElementProps<HTMLHeadingElement>,
        ref: TitleRefType
    ) => (
        <StyledTitle3 {...props} ref={ref}>
            {children}
        </StyledTitle3>
    ),
    4: (
        children: ReactText,
        props: ElementProps<HTMLHeadingElement>,
        ref: TitleRefType
    ) => (
        <StyledTitle4 {...props} ref={ref}>
            {children}
        </StyledTitle4>
    ),
    5: (
        children: ReactText,
        props: ElementProps<HTMLHeadingElement>,
        ref: TitleRefType
    ) => (
        <StyledTitle5 {...props} ref={ref}>
            {children}
        </StyledTitle5>
    ),
};

export const Title = forwardRef<HTMLHeadingElement, TitleProps>(
    ({ level = 1, children, ...props }, ref) => (
        <>
            {levels[level]?.(children, props, ref) ||
                levels[1](children, props, ref)}
        </>
    )
);

Title.displayName = `Title`;
