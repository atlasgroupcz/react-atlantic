import { FC } from 'react';
import { TimelineItem } from '.';
import { CommonHTMLProps } from '../../..';

export type TimelineComponentComposition = {
    Item: typeof TimelineItem;
};

export type TimelineCommonHTMLProps = CommonHTMLProps<HTMLDivElement>;

export type TimelineProps = {};

export type TimelineType = FC<TimelineProps> & TimelineComponentComposition;
