import { Size, Shape } from '../../../types';
import { ElementProps } from '../../../types/utils';

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

export type SkeletonProps = StyledSkeletonProps & ElementProps<HTMLDivElement>;
