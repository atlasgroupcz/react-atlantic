import React, { FC } from 'react';
import { StyledTimeline } from './style';
import { TimelineItem } from './Item/Item';

export interface TimelineProps {}
export type TimelineType = FC<TimelineProps>;

export type TimelineComponentComposition = {
    Item: typeof TimelineItem;
};

export const Timeline: TimelineType & TimelineComponentComposition = () => {
    return <StyledTimeline>Timeline</StyledTimeline>;
};

Timeline.displayName = 'Timeline';
Timeline.Item = TimelineItem;
