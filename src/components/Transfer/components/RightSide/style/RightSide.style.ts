import styled, { css } from 'styled-components';
import {
    StyledTransformRightSideContainerProps,
    StyledTransformRightSideProps,
} from '../types';
import { StyledText } from '../../../../Typography/Text/styles';
import { StyledLink } from '../../../../Typography/Link/styles';
import { StyledIcon } from '../../../../Icon/view/styles';
import { PureButton } from '../../../../Button/view/pure';

export const StyledTransformRightSideHeaderCloseButton = styled(
    StyledLink
).attrs({
    as: PureButton,
})``;

export const StyledTransformRightSideHeader = styled.div<
    StyledTransformRightSideProps
>`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({ theme }) => theme.padding.md};
    border-bottom: 1px solid ${({ theme }) => theme.color.border};

    ${StyledText} {
        margin: 0;
    }

    ${StyledLink} {
        margin: 0;
        color: ${({ theme }) => theme.color.error.alpha};
    }

    ${({ theme, size }) =>
        size === 'small' &&
        css`
            height: ${theme.height.sm};

            ${StyledText}, ${StyledLink} {
                font-size: ${theme.font.size.sm};
            }
        `}

    ${({ theme, size }) =>
        size === 'medium' &&
        css`
            height: ${theme.height.md};

            ${StyledText}, ${StyledLink} {
                font-size: ${theme.font.size.md};
            }
        `}
    
    ${({ theme, size }) =>
        size === 'large' &&
        css`
            height: ${theme.height.lg};

            ${StyledText}, ${StyledLink} {
                font-size: ${theme.font.size.lg};
            }
        `}
`;

export const StyledTransformRightSideItemContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledTransformRightSideItem = styled.div<
    StyledTransformRightSideProps
>`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    height: 100%;
    width: 100%;

    &:hover {
        ${StyledIcon} {
            color: ${({ theme }) => theme.color.error.alpha};
        }
    }

    ${StyledText} {
        margin: 0;
    }

    ${StyledIcon} {
        flex-shrink: 0;
        margin-left: ${({ theme }) => theme.margin.md};
    }

    ${({ isMultiLine }) =>
        !isMultiLine &&
        css`
            ${StyledText} {
                flex: 1;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
        `}

    ${({ theme, size }) =>
        size === 'small' &&
        css`
            ${StyledText} {
                padding: ${theme.padding.xs} ${theme.padding.md};
                line-height: 22px;
                font-size: ${theme.font.size.sm};
            }

            ${StyledIcon} {
                margin-top: 3px;
            }
        `}

    ${({ theme, size }) =>
        size === 'medium' &&
        css`
            ${StyledText} {
                padding: ${theme.padding.sm} ${theme.padding.md};
                line-height: 24px;
                font-size: ${theme.font.size.md};
            }

            ${StyledIcon} {
                margin-top: 10px;
            }
        `}
    
    ${({ theme, size }) =>
        size === 'large' &&
        css`
            ${StyledText} {
                padding: ${theme.padding.sm} ${theme.padding.md};
                line-height: 30px;
                font-size: ${theme.font.size.lg};
            }

            ${StyledIcon} {
                margin-top: 13px;
            }
        `}
`;

export const StyledTransformRightSideContainer = styled.div<
    StyledTransformRightSideContainerProps
>`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    ${({ position }) =>
        ['left', 'right'].includes(position)
            ? css`
                  width: 50%;
              `
            : ``}

    ${({ position }) =>
        position === 'bottom'
            ? css`
                  width: 100%;
              `
            : ``}
`;
