import {
    ForwardRefExoticComponent,
    PropsWithChildren,
    PropsWithoutRef,
    RefAttributes,
} from 'react';
import { TimelineItem } from '.';
import { CommonHTMLProps, HorizontalPosition } from '../../..';

//TODO!: types ->  dot notation
export type TimelineComponentComposition = {
    Item: typeof TimelineItem;
};

export type TimelineCommonHTMLProps = CommonHTMLProps<HTMLUListElement>;

export type TimelineExtraProps = {
    align?: HorizontalPosition | 'alternate';
};

export type TimelineProps = PropsWithChildren<
    TimelineCommonHTMLProps & TimelineExtraProps
>;

export type TimelineType = ForwardRefExoticComponent<
    PropsWithoutRef<TimelineProps> & RefAttributes<HTMLUListElement>
>;
