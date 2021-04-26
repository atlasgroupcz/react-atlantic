import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { InputProps } from '../types';
import { css } from '../../../../../styled';

export const getInputDefaultStyles = () => css`
    box-sizing: border-box;
    display: inline-block;
    margin: 0;
    min-width: 0;
    height: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    user-select: text;
    -webkit-appearance: none;
    touch-action: manipulation;
    outline: 0;
    color: ${(props) => props.theme.color.text.alpha};
    font-family: ${(props) => props.theme.font.family};
    font-weight: 400;
    border: none;
    background-color: transparent;

    &::placeholder {
        color: ${(props) => props.theme.color.text.beta};
    }

    &::-moz-placeholder {
        opacity: 1;
    }

    // Hide IE clear button
    &::-ms-clear {
        display: none;
    }
`;

export const getInputFullWidthStyles = (isFullWidth: boolean) => css`
    ${isFullWidth &&
    css`
        width: 100%;
    `}
`;

export const getInputDisabledStyles = (isDisabled: boolean) => css`
    ${isDisabled &&
    css`
        color: ${(props) => props.theme.color.text.beta};
        cursor: not-allowed;

        ::placeholder {
            color: ${(props) => props.theme.color.text.beta};
        }
    `}
`;

export const getInputSizeStyles = (size: InputProps['size']) => css`
    ${(props) =>
        size === 'small' &&
        css`
            font-size: ${props.theme.font.size.sm};

            i + span,
            span + i {
                margin-left: ${props.theme.margin.sm};
            }
        `}

    ${(props) =>
        size === 'medium' &&
        css`
            font-size: ${props.theme.font.size.md};
        `}
  
  ${(props) =>
        size === 'large' &&
        css`
            font-size: ${props.theme.font.size.lg};

            i + span,
            span + i {
                margin-left: ${props.theme.margin.lg};
            }
        `}
`;

export const StyledInput = styled(
    forwardRef<HTMLInputElement, InputProps>(
        (
            { size, isRound, isFullWidth, isDisabled, htmlType, ...props },
            ref
        ) => <input {...props} ref={ref} type={htmlType} />
    )
)<InputProps>`
    ${getInputDefaultStyles()}
    ${(props) => getInputFullWidthStyles(props.isFullWidth as boolean)}
    ${(props) => getInputDisabledStyles(props.isDisabled as boolean)}
    ${(props) => getInputSizeStyles(props.size as InputProps['size'])}
`;
