import React, { FC } from 'react';
import { Size, Shape } from '../../../types';

export interface SkeletonProps {
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
}

export const Skeleton: FC<SkeletonProps> = (props) => {
    const {
        className,
        size,
        shape,
        height,
        width,
        animationColors,
        bgColor,
    } = props;

    return (
        <StyledSkeleton
            className={className}
            shape={shape}
            size={size}
            width={width}
            height={height}
            animationColors={animationColors}
            bgColor={bgColor}
        />
    );
};

Skeleton.defaultProps = {
    shape: 'rectangle',
};

Skeleton.displayName = `Skeleton`;
