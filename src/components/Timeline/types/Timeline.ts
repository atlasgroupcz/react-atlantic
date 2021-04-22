import { TimelineItem } from '../view/Default/components/Item';
import { CommonHTMLProps, HorizontalPosition } from '../../../types';
import {
    PropsWithChildren,
    ForwardRefExoticComponent,
    PropsWithoutRef,
    RefAttributes,
} from 'react';

export type TimelineComponentComposition = {
    Item?: typeof TimelineItem;
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
> &
    TimelineComponentComposition;
