import React, { forwardRef, useCallback } from 'react';
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
>(
    (
        { dot, oppositeContent, children, type, unique, onClick, ...props },
        ref
    ) => {
        //TODO?: MT - styles for dot container..

        const handleClick = useCallback(
            (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
                onClick?.(e, unique);
            },
            [onClick, unique]
        );

        return (
            <StyledTimelineItem
                {...props}
                type={type}
                ref={ref}
                onClick={handleClick}
            >
                {oppositeContent && (
                    <StyledTimelineContainer>
                        {oppositeContent}
                    </StyledTimelineContainer>
                )}
                <StyledTimelineSide>
                    {dot ?? <StyledTimelineCircle />}
                </StyledTimelineSide>
                {children && (
                    <StyledTimelineContainer>
                        {children}
                    </StyledTimelineContainer>
                )}
            </StyledTimelineItem>
        );
    }
);

TimelineItem.displayName = 'TimelineItem';
