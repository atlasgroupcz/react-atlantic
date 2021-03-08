import styled, { css } from 'styled-components';
import { StyledCheckboxLabel } from '../../../../Checkbox/view/alpha/style';
import { StyledText } from '../../../../Typography/Text/style';
import { TransferProps } from '../../../types';
import { getTransferSideHeight } from '../../../utils/getTransferSideHeight';
import { StyledInputContainer } from '../../../../Input/view/composed/withFix/style';
import { StyledIcon } from '../../../../Icon';

type StyledTransferLeftSideProps = {
    isLeftSideOpen?: boolean;
    isRightSideOpen?: boolean;
    isValueExist?: boolean;
} & Pick<TransferProps, 'size' | 'visibleRows' | 'isDisabled' | 'isFullWidth'>;

type StyledTransferLeftDropdownProps = {
    isIconVisible?: boolean;
    isTransferOpen?: boolean;
};

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
            height: ${getTransferSideHeight(theme.height.sm, visibleRows)}px;
        `}

    ${({ theme, size, visibleRows }) =>
        visibleRows &&
        size === 'medium' &&
        css`
            height: ${getTransferSideHeight(theme.height.md, visibleRows)}px;
        `}
    
    ${({ theme, size, visibleRows }) =>
        visibleRows &&
        size === 'large' &&
        css`
            height: ${getTransferSideHeight(theme.height.lg, visibleRows)}px;
        `}
`;

export const StyledTransferLeftDropdown = styled.div<
    StyledTransferLeftDropdownProps
>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ theme }) => theme.width.md};
    height: calc(100% - ${({ theme }) => parseFloat(theme.margin.xs) * 2}px);
    margin: ${({ theme }) => theme.margin.xs} 0;
    border-left: 1px solid transparent;

    ${({ theme, isIconVisible }) =>
        isIconVisible &&
        css`
            border-color: ${theme.color.border};
        `}

    ${StyledIcon} {
        color: ${({ theme }) => theme.color.text.beta};

        &:hover {
            ${({ theme, isTransferOpen }) =>
                isTransferOpen
                    ? css`
                          color: ${theme.color.error.alpha};
                      `
                    : css`
                          color: ${theme.color.primary.alpha};
                      `}
        }
    }
`;

export const StyledTransferLeftSide = styled.div<StyledTransferLeftSideProps>`
    box-sizing: border-box;

    ${StyledInputContainer} {
        border: none;
        transition: none;
        align-items: stretch;

        // When Icon is visible, remove Input padding
        ${({ isValueExist, isLeftSideOpen }) =>
            ((isValueExist && isLeftSideOpen) || !isLeftSideOpen) &&
            css`
                padding-right: 0;
            `}
    }

    ${StyledCheckboxLabel} {
        width: 100%;
    }

    ${({ theme, isLeftSideOpen, isRightSideOpen, isDisabled }) =>
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

                  ${!isDisabled &&
                  css`
                      &:hover {
                          border-color: ${({ theme }) =>
                              theme.color.primary.alpha};
                      }
                  `}
              `}

    ${({ isLeftSideOpen, isFullWidth }) =>
        (isLeftSideOpen || isFullWidth) &&
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
