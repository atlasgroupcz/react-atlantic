import { InputProps } from '../../../types';
import { css, styled } from '../../../../../styled';
import { theme } from '../../../../../theme';

type StyledInputContainerProps = Pick<
    InputProps,
    'isFullWidth' | 'size' | 'isDisabled' | 'isRound'
>;

export const inputVerticalPadding = theme.padding.sm;
export const inputHorizontalPadding = theme.padding.md;

const getInputContainerDefaultHoverStyles = () => css`
    border-color: ${({ theme }) => theme.color.primary.alpha};
`;

export const getInputContainerDefaultStyles = () => css`
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    padding: ${inputVerticalPadding} ${inputHorizontalPadding};
    border-radius: ${({ theme }) => theme.radius};
    border: 1px solid ${({ theme }) => theme.color.border};
    background-color: ${({ theme }) => theme.color.background.alpha};
    transition: 0.3s border-color;

    // Need to be separate because :focus-within does not work on IE
    // so IE will not apply styles for pseudoselectors :focus-within and so :hover
    &:hover {
        ${getInputContainerDefaultHoverStyles()}
    }

    &:focus-within {
        ${getInputContainerDefaultHoverStyles()}
    }
`;

export const getInputContainerDefaultSizeStyles = (
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

export const getInputContainerDefaultFullWidthStyles = (
    isFullWidth: StyledInputContainerProps['isFullWidth']
) => css`
    ${isFullWidth &&
    css`
        width: 100%;
    `}
`;

export const getInputContainerDefaultDisabledStyles = (
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

export const getInputContainerDefaultRoundStyles = (
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
        ${getInputContainerDefaultStyles()};
        ${getInputContainerDefaultSizeStyles(
            size as StyledInputContainerProps['size']
        )};
        ${getInputContainerDefaultFullWidthStyles(
            isFullWidth as StyledInputContainerProps['isFullWidth']
        )};
        ${getInputContainerDefaultDisabledStyles(
            isDisabled as StyledInputContainerProps['isDisabled']
        )};
        ${getInputContainerDefaultRoundStyles(
            isRound as StyledInputContainerProps['isRound']
        )}
    `}
`;
