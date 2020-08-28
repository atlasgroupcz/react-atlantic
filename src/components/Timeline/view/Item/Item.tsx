import React, { forwardRef, useCallback } from 'react';
import {
    StyledTimelineItem,
    StyledTimelineItemCircle,
    StyledTimelineItemCircleContainer,
    StyledTimelineItemContent,
} from './style';
import { TimelineItemType } from './Item.types';
import { Text } from '../../../Typography/Text';
import { useTimelineContext } from '../../context';
import { StyledTimelineContainer } from '../style';

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
        const { isOppositeContent } = useTimelineContext();

        const handleClick = useCallback(
            (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
                onClick?.(e, unique);
            },
            [onClick, unique]
        );

        const OppositeContent = oppositeContent && (
            <StyledTimelineItemContent>
                {typeof oppositeContent === 'string' ? (
                    <Text>{oppositeContent}</Text>
                ) : (
                    oppositeContent
                )}
            </StyledTimelineItemContent>
        );
        const ChildrenContent = children && (
            <StyledTimelineItemContent>{children}</StyledTimelineItemContent>
        );

        return (
            <StyledTimelineItem
                {...props}
                type={type}
                ref={ref}
                onClick={handleClick}
            >
                {align === 'left' ? ChildrenContent : OppositeContent}
                <StyledTimelineItemCircleContainer>
                    {dot ?? <StyledTimelineItemCircle />}
                </StyledTimelineItemCircleContainer>
                {align === 'right' ? ChildrenContent : OppositeContent}
            </StyledTimelineItem>
        );
    }
);

TimelineItem.displayName = 'TimelineItem';
