import React, { FC } from 'react';
import { StyledTimeline } from './style';

export interface TimelineProps {}
export type TimelineType = FC<TimelineProps>;

export const Timeline: TimelineType = () => {
    return <StyledTimeline>Timeline</StyledTimeline>;
};
