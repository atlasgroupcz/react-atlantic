import React, { forwardRef, useMemo, useRef } from 'react';
import { StyledTimelineContainer } from './style';
import { TimelineType } from './Timeline.types';
import { TimelineItem } from '.';
import {
    defaultTimelineContextValue,
    TimelineContextState,
    TimelineProvider,
} from '../context';
import { mapChild } from './utils/mapChild';

export const Timeline: TimelineType = forwardRef(
    ({ children, align = 'right', ...props }, ref) => {
        const isOppositeContent = useRef<TimelineContextState>(
            defaultTimelineContextValue
        );

        const modifiedChildren = useMemo(
            () =>
                React.Children.toArray(children).map(
                    mapChild(align, isOppositeContent)
                ),
            [children, align]
        );

        return (
            <TimelineProvider isOppositeContent={isOppositeContent.current}>
                <StyledTimelineContainer {...props} ref={ref}>
                    {modifiedChildren}
                </StyledTimelineContainer>
            </TimelineProvider>
        );
    }
);

Timeline.displayName = 'Timeline';
Timeline.Item = TimelineItem;
