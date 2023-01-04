import { MouseEvents } from '../../../types';
import { ElementProps } from '../../../types/utils';

export type ProgressProps = {
    value: number;
    transitionColors?: string[];
    failed?: boolean;
} & ElementProps<HTMLDivElement> &
    MouseEvents<HTMLDivElement>;

export type ProgressBarProps = {} & ProgressProps;

export type ProgressCirleProps = {
    circleSize?: number;
} & ProgressProps;
