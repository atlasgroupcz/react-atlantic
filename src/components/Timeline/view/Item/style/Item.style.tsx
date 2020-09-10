import React, { forwardRef, PropsWithChildren } from 'react';
import { Type, MouseEvents } from '../../../../../types';
import { styled } from '../../../../../styled';
import { TimelineItemProps } from '../Item.types';

export interface StyledTimelineCircleProps {
    isActive?: Readonly<boolean>;
    type?: Readonly<Type>;
    isDisabled?: Readonly<boolean>;
}

type StyledTimelineProps = PropsWithChildren<
    Omit<TimelineItemProps, 'onClick'> & {
        onClick?: MouseEvents<HTMLLIElement>['onClick'];
    }
>;

const circleSize = `15px`;
const itemVerticalGap = `5px`;

export const StyledTimelineItemCircle = styled.div<StyledTimelineCircleProps>`
    box-sizing: border-box;
    height: ${circleSize};
    width: 100%;
    z-index: 1;
    cursor: pointer;
    border-radius: 50%;
    border: 2px solid ${(props) => props.theme.color.text.beta};
    background-color: ${(props) => props.theme.color.background.alpha};
`;

export const StyledTimelineItemCircleContainer = styled.div`
    box-sizing: border-box;
    position: relative;
    display: flex;
    align-items: center;
    width: ${circleSize};
    padding: ${itemVerticalGap} 0;
    margin: 0 ${(props) => props.theme.margin.sm};

    &:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        transform: translateX(-1px);
        border-left: 1px solid ${(props) => props.theme.color.border};
    }
`;

export const StyledTimelineItemContent = styled.div`
    box-sizing: border-box;
    padding: ${(props) => props.theme.padding.sm};
    border-radius: ${(props) => props.theme.radius};
    background-color: ${(props) => props.theme.color.background.beta};
`;

export const StyledTimelineItemContentContainer = styled.div`
    flex: 1 1 0%;
    margin: ${itemVerticalGap} 0;
`;

export const StyledTimelineItem = styled(
    forwardRef<HTMLLIElement, StyledTimelineProps>(
        ({ type, children, ...props }, ref) => (
            <li {...props} ref={ref}>
                {children}
            </li>
        )
    )
)<StyledTimelineProps>`
    box-sizing: border-box;
    position: relative;
    display: flex;

    &:first-child {
        ${StyledTimelineItemCircleContainer}:after {
            top: ${itemVerticalGap};
        }
    }

    &:last-child {
        ${StyledTimelineItemCircleContainer}:after {
            bottom: ${itemVerticalGap};
        }
    }
`;
