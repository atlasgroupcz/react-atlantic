import React, { forwardRef, useCallback } from 'react';
import {
    StyledTimelineItem,
    StyledTimelineItemCircle,
    StyledTimelineItemCircleContainer,
    StyledTimelineItemContent,
    StyledTimelineItemContentContainer,
} from './styles';
import { TimelineItemType } from './types';
import { Text } from '../../../../../Typography/Text';
import { useTimelineContext } from '../../../../context';

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
        const isOppositeContent = useTimelineContext();

        const handleClick = useCallback(
            (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
                onClick?.(e, unique);
            },
            [onClick, unique]
        );

        const OppositeContent = isOppositeContent && (
            <StyledTimelineItemContentContainer>
                {oppositeContent && (
                    <StyledTimelineItemContent>
                        {typeof oppositeContent === 'string' ? (
                            <Text>{oppositeContent}</Text>
                        ) : (
                            oppositeContent
                        )}
                    </StyledTimelineItemContent>
                )}
            </StyledTimelineItemContentContainer>
        );

        const ChildrenContent = children && (
            <StyledTimelineItemContentContainer>
                <StyledTimelineItemContent>
                    {children}
                </StyledTimelineItemContent>
            </StyledTimelineItemContentContainer>
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
