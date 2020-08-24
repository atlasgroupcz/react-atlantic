import React from 'react';
import { TimelineItem } from './Item/Item';
import { StyledTimelineContainer } from './style/Timeline.style';
import { TimelineType } from './Timeline.types';

export const Timeline: TimelineType = ({ children, ...props }) => {
    return (
        <StyledTimelineContainer {...props}>{children}</StyledTimelineContainer>
    );
};

Timeline.displayName = 'Timeline';
Timeline.Item = TimelineItem;
