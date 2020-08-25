import React, { forwardRef, useCallback } from 'react';
import {
    StyledTimelineItem,
    StyledTimelineSide,
    StyledTimelineCircle,
    StyledTimelineContainer,
} from './style';
import { TimelineItemType } from './Item.types';

export const TimelineItem: TimelineItemType = forwardRef(
    (
        {
            dot,
            oppositeContent,
            children,
            type,
            unique,
            onClick,
            align = 'right',
            ...props
        },
        ref
    ) => {
        //TODO?: MT - styles for dot container..

        const handleClick = useCallback(
            (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
                onClick?.(e, unique);
            },
            [onClick, unique]
        );

        const OppositeContent = oppositeContent && (
            <StyledTimelineContainer>{oppositeContent}</StyledTimelineContainer>
        );
        const ChildrenContent = children && (
            <StyledTimelineContainer>{children}</StyledTimelineContainer>
        );

        return (
            <StyledTimelineItem
                {...props}
                type={type}
                ref={ref}
                onClick={handleClick}
            >
                {align === 'left' ? ChildrenContent : OppositeContent}
                <StyledTimelineSide>
                    {dot ?? <StyledTimelineCircle />}
                </StyledTimelineSide>
                {align === 'right' ? ChildrenContent : OppositeContent}
            </StyledTimelineItem>
        );
    }
);

TimelineItem.displayName = 'TimelineItem';
