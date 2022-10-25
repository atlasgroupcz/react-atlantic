import { css, keyframes } from 'styled-components';
import { StyledIcon } from '../../../../Icon/view/styles';
import { ButtonProps } from '../../../types';
import { StyledText } from '../../../../Typography/Text';
import { styled } from '../../../../../styled';

type StyledButtonProps = Omit<ButtonProps, 'type' | 'htmlType'> & {
    atlanticType: ButtonProps['type'];
    type: JSX.IntrinsicElements['button']['type'];
};

const focusAnimation = keyframes`
    0%    {
      opacity: 0; 
    }

    25%   { 
      opacity: 0.5; 
    }

    50%   { 
      opacity: 1; 
    }

    75%   { 
      opacity: 0.5; 
    }

    100%  { 
      opacity: 0; 
    }
`;

export const getButtonDefaultStyles = () => css`
    position: relative;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    height: ${({ theme }) => theme.height.md};
    padding: 0 ${({ theme }) => theme.padding.md};
    line-height: 1;
    cursor: pointer;
    white-space: nowrap;
    user-select: none;
    touch-action: manipulation;
    transition: background-color 0.1s ease;
    box-shadow: ${({ theme }) => theme.boxShadow.sm};
    background-image: none;
    outline: 0;
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: ${({ theme }) => theme.radius};
    color: ${({ theme }) => theme.color.text.alpha};
    font-size: ${({ theme }) => theme.font.size.md};
    font-family: ${({ theme }) => theme.font.family};
    font-weight: 400;

    & > span {
        display: inline-block;
        vertical-align: top;
        height: 14px;
        line-height: 1;
        pointer-events: none;
        transition: margin-left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    i {
        height: 14px;
        margin: 0;
        vertical-align: top;
        line-height: 1;
        width: 14px;
    }

    i + span,
    span + i {
        margin-left: ${({ theme }) => theme.margin.sm};
    }

    i {
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    span {
        margin: 0;
    }
`;

export const getButtonDefaultTypeStyles = (
    type: StyledButtonProps['atlanticType'],
    isTransparent: StyledButtonProps['isTransparent']
) => css`
    ${({ theme }) => {
        let color = theme.color.text.alpha;
        let hoverBgColor = theme.color.background.alpha;
        let bgColor = theme.color.default;
        let borderColor = theme.color.border;
        let borderType = `solid`;

        if (type === 'primary') {
            bgColor = theme.color.primary.alpha;
            hoverBgColor = theme.color.primary.beta;
            color = theme.color.text.gamma;
            borderColor = bgColor;
        } else if (type === 'success') {
            bgColor = theme.color.success.alpha;
            hoverBgColor = theme.color.success.beta;
            color = theme.color.text.gamma;
            borderColor = bgColor;
        } else if (type === 'warning') {
            bgColor = theme.color.warning.alpha;
            hoverBgColor = theme.color.warning.beta;
            color = theme.color.text.gamma;
            borderColor = bgColor;
        } else if (type === 'error') {
            bgColor = theme.color.error.alpha;
            hoverBgColor = theme.color.error.beta;
            color = theme.color.text.gamma;
            borderColor = bgColor;
        } else if (type === 'info') {
            bgColor = theme.color.info.alpha;
            hoverBgColor = theme.color.info.beta;
            color = theme.color.text.gamma;
            borderColor = bgColor;
        } else if (type === 'dashed') {
            borderType = `dashed`;
        }

        if (isTransparent) {
            color = bgColor;
            bgColor = `transparent`;
            borderColor = bgColor;
            hoverBgColor = bgColor;
        }

        return css`
            background-color: ${bgColor};
            color: ${color};
            border: 1px ${borderType} ${borderColor};

            & > ${StyledIcon}, ${StyledText} {
                color: ${color};
            }

            ${isTransparent &&
            css`
                box-shadow: none;
                border: 1px ${borderType} ${color};
            `}

            &:hover {
                background-color: ${hoverBgColor};
            }
        `;
    }}
`;

export const getButtonDefaultRoundStyles = (isRound: StyledButtonProps['isRound']) => css`
    ${isRound &&
    css`
        border-radius: ${({ theme }) => theme.rounded};
    `}
`;

export const getButtonDefaultSizeStyles = (size: StyledButtonProps['size']) => css`
    ${({ theme }) =>
        size === 'small' &&
        css`
            padding: 0 ${theme.padding.sm};
            height: ${theme.height.sm};
            font-size: ${theme.font.size.sm};

            > span,
            > i {
                font-size: ${theme.font.size.sm};
                height: ${theme.font.size.sm};
            }

            > i {
                width: ${theme.font.size.sm};
            }

            i + span,
            span + i {
                margin-left: ${theme.margin.sm};
            }
        `}

    ${({ theme }) =>
        size === 'large' &&
        css`
            padding: 0 ${theme.padding.lg};
            height: ${theme.height.lg};
            font-size: ${theme.font.size.lg};

            & > span,
            & > i {
                font-size: ${theme.font.size.lg};
                height: ${theme.font.size.lg};
            }

            & > i {
                width: ${theme.font.size.lg};
            }

            i + span,
            span + i {
                margin-left: ${theme.margin.md};
            }
        `}
`;

export const getButtonDefaultFullWidthStyles = (isFullWidth: StyledButtonProps['isFullWidth']) => css`
    ${isFullWidth &&
    css`
        width: 100%;
    `}
`;

export const getButtonDefaultDisabledStyles = (isDisabled: StyledButtonProps['isDisabled']) =>
    css`
        ${isDisabled &&
        css`
            background-color: ${({ theme }) => theme.color.background.gamma};
            border: 1px solid ${({ theme }) => theme.color.border};
            color: ${({ theme }) => theme.color.text.alpha};
            opacity: 0.6;
            cursor: not-allowed;

            & > ${StyledIcon}, ${StyledText} {
                color: ${({ theme }) => theme.color.text.alpha};
            }

            &:hover {
                background: ${({ theme }) => theme.color.background.gamma};
            }
        `}
    `;

export const StyledButton = styled.button.withConfig({
    shouldForwardProp: (prop) =>
        !['isRound', 'isDisabled', 'isFullWidth', 'isTransparent', 'size', 'atlanticType'].includes(prop),
})<StyledButtonProps>`
    ${({ theme, atlanticType, isTransparent, isRound, size, isFullWidth, isDisabled }) => css`
        ${getButtonDefaultStyles()};
        ${getButtonDefaultTypeStyles(atlanticType, isTransparent)};
        ${getButtonDefaultRoundStyles(isRound)}
        ${getButtonDefaultSizeStyles(size)}
        ${getButtonDefaultFullWidthStyles(isFullWidth)}
        ${getButtonDefaultDisabledStyles(isDisabled)}
        
        ${!isDisabled &&
        isTransparent &&
        css`
            &:after {
                content: '';
                position: absolute;
                top: -3px;
                left: -3px;
                right: -3px;
                bottom: -3px;
                z-index: -1;
                border-radius: ${isRound ? theme.rounded : theme.radius};
                background: ${theme.color.background.gamma};
                border: 1px solid ${({ theme }) => theme.color.border};
                animation: ${focusAnimation} 0.4s ease-in-out;
            }
        `}
    `}
`;
