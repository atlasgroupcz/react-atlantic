import { TimelineItem } from '../view/Default/components/Item';
import { HorizontalPosition } from '../../../types';
import { PropsWithChildren, ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import { ElementProps } from '../../../types/utils';

export type TimelineComponentComposition = {
    Item?: typeof TimelineItem;
};

export type TimelineExtraProps = {
    align?: HorizontalPosition | 'alternate';
};

export type TimelineProps = PropsWithChildren<ElementProps<HTMLUListElement> & TimelineExtraProps>;

export type TimelineType = ForwardRefExoticComponent<PropsWithoutRef<TimelineProps> & RefAttributes<HTMLUListElement>> &
    TimelineComponentComposition;
