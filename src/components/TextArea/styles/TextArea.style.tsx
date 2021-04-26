import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { css } from '../../../styled';
import { getTypographyDefaultStyles } from '../../Typography';
import { TextAreaProps } from '../types';

export const getTextAreaDefaultStyles = () => css`
    ${(props) => getTypographyDefaultStyles(props)};
    position: relative;
    display: inline-block;
    min-width: 150px;
    user-select: text;
    max-width: 100%;
    height: auto;
    min-height: ${(props) => props.theme.height.md};
    padding: ${(props) => props.theme.padding.sm}
        ${(props) => props.theme.padding.md};
    margin: 0;

    vertical-align: middle;
    font-weight: 400;
    overflow: auto;
    -webkit-appearance: none;
    touch-action: manipulation;

    background-color: ${(props) => props.theme.color.background.alpha};
    color: ${(props) => props.theme.color.text.alpha};
    border: 1px solid ${(props) => props.theme.color.border};
    border-radius: ${(props) => props.theme.radius};
    outline: 0;
    list-style: none;

    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    &::placeholder {
        color: ${(props) => props.theme.color.text.beta};
    }

    &:focus {
        border-color: ${(props) => props.theme.color.primary.alpha};
        outline-offset: -2px;
        box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.3);
    }

    // Hide IE clear button
    &::-ms-clear {
        display: none;
    }
`;

export const getTextAreaDisabledStyles = (isDisabled: boolean) => css`
    ${isDisabled &&
    css`
        color: ${(props) => props.theme.color.text.beta};

        ::placeholder {
            color: ${(props) => props.theme.color.text.beta};
        }

        background-color: ${(props) => props.theme.color.default};
        cursor: not-allowed;
        outline: 0;

        &:hover,
        &:focus {
            outline: 0;
            box-shadow: none;
            border: 1px solid ${(props) => props.theme.color.border};
        }
    `}
`;

export const getTextAreaFullWidthStyles = (isFullWidth: boolean) => css`
    ${isFullWidth &&
    css`
        width: 100%;
    `}
`;

export const getTextAreaSizeStyles = (size: TextAreaProps['size']) => css`
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

export const StyledTextArea = styled(
    forwardRef<HTMLTextAreaElement, TextAreaProps>(
        ({ size, isFullWidth, isDisabled, allowResize, ...props }, ref) => (
            <textarea {...props} ref={ref} />
        )
    )
)<TextAreaProps>`
    ${getTextAreaDefaultStyles()}
    ${(props) => getTextAreaDisabledStyles(props.isDisabled as boolean)}
    ${(props) => getTextAreaFullWidthStyles(props.isFullWidth as boolean)}
    ${(props) => getTextAreaSizeStyles(props.size as TextAreaProps['size'])}

    resize: ${({ allowResize = false }) => (allowResize ? `both` : `none`)};
`;
