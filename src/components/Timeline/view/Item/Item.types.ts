import { MouseEvents, CommonHTMLProps, Type } from '../../../..';
import { ReactNode, FC, PropsWithChildren } from 'react';

export type TimelineItemEventProps = MouseEvents<HTMLLIElement>;

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
