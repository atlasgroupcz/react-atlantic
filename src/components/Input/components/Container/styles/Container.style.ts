import { InputProps } from '../../../types';
import { css, styled } from '../../../../../styled';
import { StyledInput } from '../../Base';
import { StyledInputPrefix } from '../../Prefix';
import { StyledInputSuffix } from '../../Suffix';
import { theme } from '../../../../../theme';

type StyledInputContainerProps = Pick<
    InputProps,
    'isFullWidth' | 'size' | 'isDisabled' | 'isRound'
>;

export const inputVerticalPadding = theme.padding.sm;
export const inputHorizontalPadding = theme.padding.md;

export const getInputContainerWithFixStyles = () => css`
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    padding: ${inputVerticalPadding} ${inputHorizontalPadding};
    border-radius: ${({ theme }) => theme.radius};
    border: 1px solid ${({ theme }) => theme.color.border};
    background-color: ${({ theme }) => theme.color.background.alpha};
    transition: 0.3s border-color;

    &:hover,
    &:focus-within {
        border-color: ${({ theme }) => theme.color.primary.alpha};
    }
`;

export const getInputContainerWithFixSizeStyles = (
    size: StyledInputContainerProps['size']
) => css`
    ${({ theme }) =>
        size === 'small' &&
        css`
            width: 180px;
            height: ${theme.height.sm};
        `}

    ${({ theme }) =>
        size === 'medium' &&
        css`
            width: 200px;
            height: ${theme.height.md};
        `}
    
    ${({ theme }) =>
        size === 'large' &&
        css`
            width: 220px;
            height: ${theme.height.lg};
        `}
`;

export const getInputContainerWithFixFullWidthStyles = (
    isFullWidth: StyledInputContainerProps['isFullWidth']
) => css`
    ${isFullWidth &&
    css`
        width: 100%;
    `}
`;

export const getInputContainerWithFixDisabledStyles = (
    isDisabled: StyledInputContainerProps['isDisabled']
) => css`
    ${({ theme }) =>
        isDisabled &&
        css`
            cursor: not-allowed;
            outline: 0;
            background-color: ${theme.color.default};

            &:hover {
                outline: 0;
                border-color: ${theme.color.border};
            }
        `}
`;

export const getInputContainerWithFixRoundStyles = (
    isRound: StyledInputContainerProps['isRound']
) => css`
    ${({ theme }) =>
        isRound &&
        css`
            border-radius: ${theme.rounded};
        `}
`;

export const StyledInputContainer = styled.span<StyledInputContainerProps>`
    ${({ size, isFullWidth, isDisabled, isRound }) => css`
        ${getInputContainerWithFixStyles()};
        ${getInputContainerWithFixSizeStyles(
            size as StyledInputContainerProps['size']
        )};
        ${getInputContainerWithFixFullWidthStyles(
            isFullWidth as StyledInputContainerProps['isFullWidth']
        )};
        ${getInputContainerWithFixDisabledStyles(
            isDisabled as StyledInputContainerProps['isDisabled']
        )};
        ${getInputContainerWithFixRoundStyles(
            isRound as StyledInputContainerProps['isRound']
        )}
    `}
`;
