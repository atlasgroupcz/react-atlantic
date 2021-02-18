import styled, { css } from 'styled-components';
import { StyledCheckboxLabel } from '../../../../Checkbox/view/alpha/style';
import { StyledText } from '../../../../Typography/Text/Text.style';
import { StyledComponentTransferProps } from '../../../types';
import { getTransferSideHeight } from '../../../utils/getTransferSideHeight';
import { StyledInputContainer } from '../../../../Input/view/composed/withFix/style';
import { StyledIcon } from '../../../../Icon';

type StyledTransferLeftSideProps = {
    isLeftSideOpen?: boolean;
    isRightSideOpen?: boolean;
} & Pick<StyledComponentTransferProps, 'size' | 'visibleRows'>;

export const StyledTransferLeftSideNoResults = styled.div<
    StyledTransferLeftSideProps
>`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ theme, size, visibleRows }) =>
        visibleRows &&
        size === 'small' &&
        css`
            height: ${getTransferSideHeight(theme.height.sm, visibleRows)};
        `}

    ${({ theme, size, visibleRows }) =>
        visibleRows &&
        size === 'medium' &&
        css`
            height: ${getTransferSideHeight(theme.height.md, visibleRows)};
        `}
    
    ${({ theme, size, visibleRows }) =>
        visibleRows &&
        size === 'large' &&
        css`
            height: ${getTransferSideHeight(theme.height.lg, visibleRows)};
        `}
`;

export const StyledTransferLeftSide = styled.div<StyledTransferLeftSideProps>`
    box-sizing: border-box;

    ${StyledInputContainer} {
        border: none;
        transition: none;
        ${StyledIcon} {
            &:hover {
                color: ${({ theme }) => theme.color.error.alpha};
            }
        }
    }

    ${StyledCheckboxLabel} {
        width: 100%;
    }

    ${({ theme, isLeftSideOpen, isRightSideOpen }) =>
        isLeftSideOpen || isRightSideOpen
            ? css`
                  border: none;

                  ${StyledInputContainer} {
                      border-bottom: 1px solid ${theme.color.border};
                      border-bottom-left-radius: 0;
                      border-bottom-right-radius: 0;
                  }
              `
            : css`
                  border: 1px solid ${({ theme }) => theme.color.border};
                  border-radius: ${({ theme }) => theme.radius};

                  &:hover {
                      border-color: ${({ theme }) => theme.color.primary.alpha};
                  }
              `}

    ${({ isLeftSideOpen }) =>
        isLeftSideOpen &&
        css`
            width: 100%;
        `}

    ${({ theme, isRightSideOpen }) =>
        isRightSideOpen &&
        css`
            width: 50%;
            border-right: 1px solid ${theme.color.border};
        `}
    
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
