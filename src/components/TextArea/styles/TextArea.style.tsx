import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { css } from '../../../styled';
import { getTypographyDefaultStyles } from '../../Typography';
import { TextAreaProps } from '../types';

export const getTextAreaDefaultStyles = () => css`
    ${getTypographyDefaultStyles()};
    box-sizing: border-box;
    overflow: auto;
    position: relative;
    display: inline-block;
    vertical-align: middle;
    min-width: 150px;
    max-width: 100%;
    height: auto;
    min-height: ${({ theme }) => theme.height.md};
    padding: ${({ theme }) => theme.padding.sm}
        ${({ theme }) => theme.padding.md};
    margin: 0;
    background-color: ${({ theme }) => theme.color.background.alpha};
    font-weight: 400;
    color: ${({ theme }) => theme.color.text.alpha};
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: ${({ theme }) => theme.radius};
    outline: 0;
    user-select: text;
    -webkit-appearance: none;
    touch-action: manipulation;

    &::placeholder {
        color: ${({ theme }) => theme.color.text.beta};
    }

    &:focus {
        border-color: ${({ theme }) => theme.color.primary.alpha};
        outline-offset: -2px;
        box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.3);
    }

    // Hide IE clear button
    &::-ms-clear {
        display: none;
    }
`;

export const getTextAreaDisabledStyles = (
    isDisabled: TextAreaProps['isDisabled']
) => css`
    ${isDisabled &&
    css`
        cursor: not-allowed;
        outline: 0;
        color: ${({ theme }) => theme.color.text.beta};
        background-color: ${({ theme }) => theme.color.default};

        &::placeholder {
            color: ${({ theme }) => theme.color.text.beta};
        }

        &:hover,
        &:focus {
            outline: 0;
            box-shadow: none;
            border: 1px solid ${({ theme }) => theme.color.border};
        }
    `}
`;

export const getTextAreaFullWidthStyles = (
    isFullWidth: TextAreaProps['isFullWidth']
) => css`
    ${isFullWidth &&
    css`
        width: 100%;
    `}
`;

export const getTextAreaSizeStyles = (size: TextAreaProps['size']) => css`
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

export const StyledTextArea = styled(
    forwardRef<HTMLTextAreaElement, TextAreaProps>(
        ({ size, isFullWidth, isDisabled, allowResize, ...props }, ref) => (
            <textarea {...props} ref={ref} />
        )
    )
)<TextAreaProps>`
    ${({ isDisabled, isFullWidth, size, allowResize = false }) => css`
        ${getTextAreaDefaultStyles()}
        ${getTextAreaDisabledStyles(isDisabled)};
        ${getTextAreaFullWidthStyles(isFullWidth)};
        ${getTextAreaSizeStyles(size)};
        resize: ${allowResize ? `both` : `none`};
    `}
`;
