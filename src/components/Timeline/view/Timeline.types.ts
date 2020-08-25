import { FC, PropsWithChildren } from 'react';
import { TimelineItem } from '.';
import { CommonHTMLProps } from '../../..';

export type TimelineComponentComposition = {
    Item: typeof TimelineItem;
};

export type TimelineCommonHTMLProps = CommonHTMLProps<HTMLUListElement>;

export type TimelineProps = PropsWithChildren<TimelineCommonHTMLProps>;

export type TimelineType = FC<TimelineProps> & TimelineComponentComposition;
