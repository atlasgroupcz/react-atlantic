import React, { forwardRef, PropsWithChildren } from 'react';
import { css, Type, PureButton } from '../../../../..';
import { Link } from '../../../../Typography/Link/Link';
import { StyledTitle5 } from '../../../../Typography/Title/Title.style';
import { StyledText } from '../../../../Typography/Text/Text.style';
import { StyledIcon } from '../../../../Icon/Icon.style';
import { styled } from '../../../../../styled';
import { TimelineItemProps } from '../Item.types';

const circleSize = `15px`;

export interface StyledTimelineCircleProps {
    isActive?: boolean;
    type?: Type;
    isDisabled?: Readonly<boolean>;
}

export interface StyledTimelineTitleProps {
    isActive?: boolean;
    isDisabled?: Readonly<boolean>;
}

export interface StyledTimelineContainerProps {
    isMain?: boolean;
}

export const StyledTimelineItem = styled(
    forwardRef<HTMLLIElement, PropsWithChildren<TimelineItemProps>>(
        ({ type, children, ...props }, ref) => (
            <li {...props} ref={ref}>
                {children}
            </li>
        )
    )
)<TimelineItemProps>`
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
                border-color: ${(props.theme.color[props.type] as any).alpha!};
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

export const StyledTimelineTitle = styled((props) => <Link {...props} />)<
    StyledTimelineTitleProps
>`
    display: block;
    margin: 0;
    font-weight: 600;
    color: ${(props) => props.theme.color.text.alpha};

    ${(props) =>
        !props.isDisabled &&
        css`
            &:hover {
                color: ${(props) => props.theme.color.primary.alpha};

                ${StyledTitle5} {
                    color: ${(props) => props.theme.color.primary.alpha};
                }
            }
        `}

    ${StyledTitle5} {
        margin: 0;
        color: ${(props) => props.theme.color.text.alpha};

        ${(props) =>
            props.isActive &&
            css`
                color: ${(props) => props.theme.color.primary.alpha};
            `}
    }

    ${(props) =>
        props.isDisabled &&
        css`
            &:hover {
                text-decoration: none;
            }

            ${StyledTitle5} {
                color: ${props.theme.color.text.beta};
            }

            cursor: not-allowed;
        `}
`;

export const StyledTimelineCaption = styled((props) => <Link {...props} />)<{
    hasMarginRight: Readonly<boolean>;
    isDisabled?: Readonly<boolean>;
}>`
    display: block;
    margin: 0;
    color: ${(props) => props.theme.color.text.beta};
    font-size: ${(props) => props.theme.font.size.sm};

    ${(props) =>
        props.hasMarginRight &&
        css`
            margin-right: ${props.theme.margin.sm};
        `}

    ${StyledText} {
        color: ${(props) => props.theme.color.text.beta};
    }

    ${(props) =>
        props.isDisabled &&
        css`
            cursor: not-allowed;
        `}
`;

export const StyledTimelineContainer = styled.div<StyledTimelineContainerProps>`
    flex: 1 1 0;
`;

export const StyledTimelineButton = styled((props) => (
    <PureButton {...props} />
))`
    ${StyledIcon} {
        height: auto;
    }
`;

export const StyledTimelineCaptionContainer = styled.div`
    display: flex;
`;

export const StyledListElementsContainer = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
`;
