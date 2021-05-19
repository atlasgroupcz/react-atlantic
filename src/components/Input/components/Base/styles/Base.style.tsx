import React, { forwardRef } from 'react';
import { InputProps } from '../../../types';
import { css, styled } from '../../../../../styled';

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
    color: ${({ theme }) => theme.color.text.alpha};
    font-family: ${({ theme }) => theme.font.family};
    font-weight: 400;
    border: none;
    background-color: transparent;

    &::placeholder {
        color: ${({ theme }) => theme.color.text.beta};
    }

    &::-moz-placeholder {
        opacity: 1;
    }

    // Hide IE clear button
    &::-ms-clear {
        display: none;
    }
`;

export const getInputFullWidthStyles = (
    isFullWidth: InputProps['isFullWidth']
) => css`
    ${isFullWidth &&
    css`
        width: 100%;
    `}
`;

export const getInputDisabledStyles = (
    isDisabled: InputProps['isDisabled']
) => css`
    ${isDisabled &&
    css`
        color: ${({ theme }) => theme.color.text.beta};
        cursor: not-allowed;

        &::placeholder {
            color: ${({ theme }) => theme.color.text.beta};
        }
    `}
`;

export const getInputSizeStyles = (size: InputProps['size']) => css`
    ${({ theme }) =>
        size === 'small' &&
        css`
            font-size: ${theme.font.size.sm};

            i + span,
            span + i {
                margin-left: ${theme.margin.sm};
            }
        `}

    ${({ theme }) =>
        size === 'medium' &&
        css`
            font-size: ${theme.font.size.md};
        `}
  
    ${({ theme }) =>
        size === 'large' &&
        css`
            font-size: ${theme.font.size.lg};

            i + span,
            span + i {
                margin-left: ${theme.margin.lg};
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
    ${({ isFullWidth, isDisabled, size }) => css`
        ${getInputDefaultStyles()}
        ${getInputFullWidthStyles(isFullWidth as InputProps['isFullWidth'])}
        ${getInputDisabledStyles(isDisabled as InputProps['isDisabled'])}
        ${getInputSizeStyles(size as InputProps['size'])}
    `}
`;
