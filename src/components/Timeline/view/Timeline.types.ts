import {
    FC,
    ForwardRefExoticComponent,
    PropsWithChildren,
    PropsWithoutRef,
    RefAttributes,
} from 'react';
import { TimelineItem } from '.';
import { CommonHTMLProps } from '../../..';

//TODO!: types
export type TimelineComponentComposition = {
    Item: typeof TimelineItem;
};

export type TimelineCommonHTMLProps = CommonHTMLProps<HTMLUListElement>;

export type TimelineProps = PropsWithChildren<TimelineCommonHTMLProps>;

export type TimelineType = ForwardRefExoticComponent<
    PropsWithoutRef<TimelineProps> & RefAttributes<HTMLUListElement>
>;
