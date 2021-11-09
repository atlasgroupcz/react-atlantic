import styled, { css } from 'styled-components';
import { StyledCheckboxLabel } from '../../../../../../../../Checkbox/view/alpha/styles';
import { StyledText } from '../../../../../../../../Typography';
import { TransferProps } from '../../../../../../../types';
import { StyledIcon } from '../../../../../../../../Icon';
import { Position } from '../../../../../../../../../types';
import { StyledInputContainer } from '../../../../../../../../Input';
import { OptionType } from '../../../../../../../../Select';

type StyledTransferAbstractProps = {
    isLeftSideOpen?: boolean;
    isRightSideOpen?: boolean;
} & Pick<
    TransferProps<OptionType<string, any>>,
    'size' | 'visibleRows' | 'isDisabled' | 'isFullWidth'
>;

type StyledTransferLeftSideProps = StyledTransferAbstractProps & {
    position: Position;
};

type StyledTransferLeftDropdownProps = {
    isIconVisible?: boolean;
    isTransferOpen?: boolean;
};

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
        padding-right: 0;
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


    ${({ theme, isRightSideOpen, position }) =>
        isRightSideOpen &&
        position === 'right' &&
        css`
            width: 50%;
            border-right: 1px solid ${theme.color.border};
        `}


        
    ${({ theme, isRightSideOpen, position }) =>
        isRightSideOpen &&
        position === 'left' &&
        css`
            width: 50%;
            border-left: 1px solid ${theme.color.border};
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
