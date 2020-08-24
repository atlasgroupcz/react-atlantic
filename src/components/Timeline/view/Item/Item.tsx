import React, { forwardRef } from 'react';
import {
    StyledTimelineItem,
    StyledTimelineSide,
    StyledTimelineCircle,
    StyledTimelineContainer,
} from './style';
import { TimelineItemType, TimelineItemProps } from './Item.types';

export const TimelineItem: TimelineItemType = forwardRef<
    HTMLLIElement,
    TimelineItemProps
>(({ dot, label, children, type, ...props }, ref) => {
    //TODO?: MT - styles for dot container..
    return (
        <StyledTimelineItem {...props} type={type} ref={ref}>
            {label}
            <StyledTimelineSide>
                {dot ?? <StyledTimelineCircle />}
            </StyledTimelineSide>
            <StyledTimelineContainer>{children}</StyledTimelineContainer>
        </StyledTimelineItem>
    );
});

TimelineItem.displayName = 'TimelineItem';
