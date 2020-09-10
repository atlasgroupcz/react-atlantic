import React, { FC } from 'react';
import { Size, Shape } from '../../../types';
import { StyledSkeleton } from './style';

export type StyledSkeletonProps = {
    /** small | medium | large */
    size?: Size;
    /** circle |  rectangle */
    shape?: Shape;
    /** custom className */
    className?: string;
    /** width */
    width?: number | string;
    /** height */
    height?: number;
    /** custom background color */
    bgColor?: string;
    /** custom colors for animation */
    animationColors?: {
        alpha: string;
        beta: string;
        gamma: string;
    };
};

export interface SkeletonProps extends StyledSkeletonProps {}

export const Skeleton: FC<SkeletonProps> = ({ ...props }) => {
    return <StyledSkeleton {...props} />;
};

Skeleton.defaultProps = {
    shape: 'rectangle',
};

Skeleton.displayName = `Skeleton`;
