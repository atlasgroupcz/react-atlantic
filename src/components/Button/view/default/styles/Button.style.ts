import { css, keyframes, StyledComponent } from 'styled-components';
import { StyledIcon } from '../../../../Icon/view/styles';
import { ButtonProps, ButtonStyleType } from '../../../types';
import { StyledText } from '../../../../Typography/Text';
import { styled } from '../../../../../styled';
import { FC } from 'react';
import { Size } from '../../../../../types';

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

export const getDefaultButtonStyles = () => css`
    position: relative;
    display: inline-block;
    padding: 0 ${(props) => props.theme.padding.md};
    height: ${(props) => props.theme.height.md};
    line-height: 1;
    background-image: none;
    color: ${(props) => props.theme.color.text.alpha};
    outline: 0;
    cursor: pointer;
    font-size: ${(props) => props.theme.font.size.md};
    font-family: ${(props) => props.theme.font.family};
    font-weight: 400;
    vertical-align: middle;
    white-space: nowrap;
    text-align: center;
    user-select: none;
    touch-action: manipulation;
    transition: background-color 0.1s ease;
    box-shadow: ${(props) => props.theme.boxShadow.sm};
    border: 1px solid ${(props) => props.theme.color.border};
    border-radius: ${(props) => props.theme.radius};

    > span {
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
        margin-left: ${(props) => props.theme.margin.sm};
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

export const getButtonTypeStyles = (
    type: ButtonStyleType,
    isTransparent: boolean
) => css`
    ${(props) => {
        let color = props.theme.color.text.alpha;
        let hoverBgColor = props.theme.color.background.alpha;
        let bgColor = props.theme.color.default;
        let borderColor = props.theme.color.border;
        let borderType = `solid`;

        if (type === 'primary') {
            bgColor = props.theme.color.primary.alpha;
            hoverBgColor = props.theme.color.primary.beta;
            color = props.theme.color.text.gamma;
            borderColor = bgColor;
        } else if (type === 'success') {
            bgColor = props.theme.color.success.alpha;
            hoverBgColor = props.theme.color.success.beta;
            color = props.theme.color.text.gamma;
            borderColor = bgColor;
        } else if (type === 'warning') {
            bgColor = props.theme.color.warning.alpha;
            hoverBgColor = props.theme.color.warning.beta;
            color = props.theme.color.text.gamma;
            borderColor = bgColor;
        } else if (type === 'error') {
            bgColor = props.theme.color.error.alpha;
            hoverBgColor = props.theme.color.error.beta;
            color = props.theme.color.text.gamma;
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

            ${StyledIcon}, ${StyledText} {
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

export const getButtonRoundStyles = (isRound: boolean) => css`
    ${isRound &&
    css`
        border-radius: ${(props) => props.theme.rounded};
    `}
`;

export const getButtonSizeStyles = (size: Size) => css`
    ${(props) =>
        size === 'small' &&
        css`
            padding: 0 ${props.theme.padding.sm};
            height: ${props.theme.height.sm};
            font-size: ${props.theme.font.size.sm};

            > span,
            > i {
                font-size: ${props.theme.font.size.sm};
                height: ${props.theme.font.size.sm};
            }

            > i {
                width: ${props.theme.font.size.sm};
            }

            i + span,
            span + i {
                margin-left: ${props.theme.margin.sm};
            }
        `}

    ${(props) =>
        size === 'large' &&
        css`
            padding: 0 ${props.theme.padding.lg};
            height: ${props.theme.height.lg};
            font-size: ${props.theme.font.size.lg};

            > span,
            > i {
                font-size: ${props.theme.font.size.lg};
                height: ${props.theme.font.size.lg};
            }

            > i {
                width: ${props.theme.font.size.lg};
            }

            i + span,
            span + i {
                margin-left: ${props.theme.margin.md};
            }
        `}
`;

export const getButtonFullWidthStyles = (isFullWidth: boolean) => css`
    ${isFullWidth &&
    css`
        width: 100%;
    `}
`;

export const getDisabledButtonStyles = (isDisabled: boolean) =>
    css`
        ${isDisabled &&
        css`
            background-color: ${(props) => props.theme.color.background.gamma};
            border: 1px solid ${(props) => props.theme.color.border};
            color: ${(props) => props.theme.color.text.alpha};
            opacity: 0.6;
            cursor: not-allowed;

            &:hover {
                background: ${(props) => props.theme.color.background.gamma};
            }
        `}
    `;

export const StyledButton = styled.button.withConfig({
    shouldForwardProp: (prop) =>
        ![
            'isRound',
            'isDisabled',
            'isFullWidth',
            'isTransparent',
            'size',
            'atlanticType',
        ].includes(prop),
})<StyledButtonProps>`
    ${getDefaultButtonStyles()};
    ${(props) =>
        !props.isDisabled &&
        props.isTransparent &&
        css`
            &:after {
                content: '';
                position: absolute;
                top: -3px;
                left: -3px;
                right: -3px;
                bottom: -3px;
                z-index: -1;
                border-radius: ${props.isRound
                    ? props.theme.rounded
                    : props.theme.radius};
                background: ${props.theme.color.background.gamma};
                border: 1px solid ${(props) => props.theme.color.border};
                animation: ${focusAnimation} 0.4s ease-in-out;
            }
        `}

    ${(props) =>
        getButtonTypeStyles(
            props.atlanticType as ButtonStyleType,
            props.isTransparent as boolean
        )}
    
    ${(props) => getButtonRoundStyles(props.isRound as boolean)}
    
    ${(props) => getButtonSizeStyles(props.size as Size)}
    
    ${(props) => getButtonFullWidthStyles(props.isFullWidth as boolean)}

    ${(props) => getDisabledButtonStyles(props.isDisabled as boolean)}
` as StyledComponent<FC<StyledButtonProps>, {}>;
