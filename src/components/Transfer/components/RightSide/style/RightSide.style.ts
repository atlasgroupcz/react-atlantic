import styled, { css } from 'styled-components';
import { StyledTransformRightSideProps } from '../types';
import { StyledText } from '../../../../Typography/Text/Text.style';
import { StyledLink } from '../../../../Typography/Link/Link.style';
import { StyledIcon } from '../../../../Icon/view/style';
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

export const StyledTransformRightSideItem = styled.div<
    StyledTransformRightSideProps
>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;

    &:hover {
        ${StyledIcon} {
            color: ${({ theme }) => theme.color.error.alpha};
        }
    }

    ${({ theme, size }) =>
        size === 'small' &&
        css`
            ${StyledText} {
                font-size: ${theme.font.size.sm};
            }
        `}

    ${({ theme, size }) =>
        size === 'medium' &&
        css`
            ${StyledText} {
                font-size: ${theme.font.size.md};
            }
        `}
    
    ${({ theme, size }) =>
        size === 'large' &&
        css`
            ${StyledText} {
                font-size: ${theme.font.size.lg};
            }
        `}
`;

export const StyledTransformRightSideContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 50%;
`;