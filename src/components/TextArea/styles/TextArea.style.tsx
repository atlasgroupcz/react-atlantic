import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { css } from '../../../styled';
import { getTypographyDefaultStyles } from '../../Typography';
import { TextAreaProps } from '../types';

export const getTextAreaDefaultStyles = () => css`
    ${getTypographyDefaultStyles()};
    position: relative;
    display: inline-block;
    min-width: 150px;
    user-select: text;
    max-width: 100%;
    height: auto;
    min-height: ${({ theme }) => theme.height.md};
    padding: ${({ theme }) => theme.padding.sm}
        ${({ theme }) => theme.padding.md};
    margin: 0;

    vertical-align: middle;
    font-weight: 400;
    overflow: auto;
    -webkit-appearance: none;
    touch-action: manipulation;

    background-color: ${({ theme }) => theme.color.background.alpha};
    color: ${({ theme }) => theme.color.text.alpha};
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: ${({ theme }) => theme.radius};
    outline: 0;
    list-style: none;

    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

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
        color: ${({ theme }) => theme.color.text.beta};

        ::placeholder {
            color: ${({ theme }) => theme.color.text.beta};
        }

        background-color: ${({ theme }) => theme.color.default};
        cursor: not-allowed;
        outline: 0;

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
