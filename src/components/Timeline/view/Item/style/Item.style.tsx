import React, { forwardRef, PropsWithChildren } from 'react';
import { css, Type, MouseEvents } from '../../../../..';

import { styled } from '../../../../../styled';
import { TimelineItemProps } from '../Item.types';

const circleSize = `15px`;

export interface StyledTimelineCircleProps {
    isActive?: boolean;
    type?: Type;
    isDisabled?: Readonly<boolean>;
}

export interface StyledTimelineContainerProps {
    isMain?: boolean;
}

type StyledTimelineProps = PropsWithChildren<
    Omit<TimelineItemProps, 'onClick'> & {
        onClick?: MouseEvents<HTMLLIElement>['onClick'];
    }
>;

export const StyledTimelineItem = styled(
    forwardRef<HTMLLIElement, StyledTimelineProps>(
        ({ type, children, ...props }, ref) => (
            <li {...props} ref={ref}>
                {children}
            </li>
        )
    )
)<StyledTimelineProps>`
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-left: ${(props) =>
        parseFloat(props.theme.margin.sm) + parseFloat(circleSize)}px;
    padding: ${(props) => props.theme.padding.sm};
    margin-bottom: ${(props) => props.theme.margin.md};
    background-color: ${(props) => props.theme.color.background.alpha};
    border-radius: ${(props) => props.theme.radius};

    ${(props) =>
        props.type &&
        props.type !== 'default' &&
        css`
            ${StyledTimelineCircle} {
                border-color: ${(props.theme.color?.[props.type] as any)
                    .alpha!};
            }
        `}
`;

export const StyledTimelineSide = styled.div`
    position: absolute;
    height: 100%;
    right: calc(100% + ${(props) => props.theme.margin.sm});
    width: ${circleSize};
`;

export const StyledTimelineCircle = styled.div<StyledTimelineCircleProps>`
  position: relative;
  box-sizing: border-box;
  width: ${circleSize};
  height: ${circleSize};
  cursor: pointer;
  margin-top: ${(props) => props.theme.margin.md};
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.color.text.beta};
  background-color: ${(props) => props.theme.color.background.alpha};

  ${(props) =>
      props.type &&
      css`
          border-color: ${(props.theme.color[props.type] as any).alpha!};
      `}

  ${(props) =>
      props.isActive &&
      css`
          border-color: ${(props) => props.theme.color.primary.alpha};
      `}
  
 
    ${(props) =>
        props.isDisabled &&
        css`
            border-color: ${(props) => props.theme.color.text.beta};
            cursor: not-allowed;
        `}
  
`;

export const StyledTimelineContainer = styled.div<StyledTimelineContainerProps>`
    flex: 1 1 0;
`;
