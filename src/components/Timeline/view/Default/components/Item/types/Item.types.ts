import { ReactNode, PropsWithChildren, ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import { HorizontalPosition, MouseEvents, Type } from '../../../../../../../types';
import { ElementProps } from '../../../../../../../types/utils';

export type TimelineItemEventProps = Omit<MouseEvents<HTMLLIElement>, 'onClick'> & {
    onClick?: MouseEvents<HTMLLIElement>['onClick'] | TimelineOnClick;
};

export type TimelineOnClick = (
    e: Parameters<NonNullable<MouseEvents<HTMLLIElement>['onClick']>>[0],
    unique: TimelineItemExtraProps['unique']
) => void;

export type TimelineItemExtraProps = {
    dot?: ReactNode;
    oppositeContent?: ReactNode;
    type?: Type;
    unique?: string | number;
    align?: HorizontalPosition;
};

export type TimelineItemProps = TimelineItemEventProps & ElementProps<HTMLLIElement> & TimelineItemExtraProps;

export type TimelineItemType = ForwardRefExoticComponent<
    PropsWithoutRef<PropsWithChildren<TimelineItemProps>> & RefAttributes<HTMLLIElement>
>;
