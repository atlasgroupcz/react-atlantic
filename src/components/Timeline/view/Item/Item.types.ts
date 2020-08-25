import { MouseEvents, CommonHTMLProps, Type } from '../../../..';
import { ReactNode, FC, PropsWithChildren } from 'react';

export type TimelineItemEventProps = Omit<
    MouseEvents<HTMLLIElement>,
    'onClick'
> & {
    onClick?: MouseEvents<HTMLLIElement>['onClick'] | TimelineOnClick;
};

export type TimelineOnClick = (
    e: Parameters<NonNullable<MouseEvents<HTMLLIElement>['onClick']>>[0],
    i: number
) => void;

export type TimelineItemCommonHTMLProps = CommonHTMLProps<HTMLLIElement>;

export type TimelineItemExtraProps = {
    dot?: ReactNode;
    label?: ReactNode;
    type?: Type;
};

export type TimelineItemProps = TimelineItemEventProps &
    TimelineItemCommonHTMLProps &
    TimelineItemExtraProps;

export type TimelineItemType = FC<PropsWithChildren<TimelineItemProps>>;
