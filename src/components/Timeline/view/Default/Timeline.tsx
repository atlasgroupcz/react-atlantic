import React, { forwardRef, useMemo, useRef } from 'react';
import { StyledTimelineContainer } from './styles';
import { TimelineItem } from './components';
import {
    defaultTimelineContextValue,
    TimelineProvider,
    TimelineContextState,
} from '../../context';
import { mapChild } from './utils';
import { TimelineType } from '../../types';

export const DefaultTimeline: TimelineType = forwardRef(
    ({ children, className, align = 'right', ...props }, ref) => {
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
                <StyledTimelineContainer
                    className={className}
                    {...props}
                    ref={ref}
                >
                    {modifiedChildren}
                </StyledTimelineContainer>
            </TimelineProvider>
        );
    }
);

DefaultTimeline.displayName = 'Timeline';
DefaultTimeline.Item = TimelineItem;
