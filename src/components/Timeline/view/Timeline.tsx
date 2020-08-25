import React, { forwardRef } from 'react';
import { StyledTimelineContainer } from './style/Timeline.style';
import { TimelineType } from './Timeline.types';

export const Timeline: TimelineType = forwardRef(
    ({ children, ...props }, ref) => {
        return (
            <StyledTimelineContainer {...props} ref={ref}>
                {children}
            </StyledTimelineContainer>
        );
    }
);

Timeline.displayName = 'Timeline';
