import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { css } from '../../../styled';
import { TextAreaProps } from '../types';

export const StyledTextArea = styled(
    forwardRef<HTMLTextAreaElement, TextAreaProps>(
        ({ size, isFullWidth, isDisabled, allowResize, ...props }, ref) => (
            <textarea {...props} ref={ref} />
        )
    )
)<TextAreaProps>`
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
    line-height: 1.5;
    font-family: ${(props) => props.theme.font.family};
    font-size: ${(props) => props.theme.font.size.md};
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

    ::placeholder {
        color: ${(props) => props.theme.color.text.beta};
    }

    :focus {
        border-color: ${(props) => props.theme.color.primary.alpha};
        outline-offset: -2px;
        box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.3);
    }

    ${(props) =>
        props.isDisabled &&
        css`
            color: ${props.theme.color.text.beta};

            ::placeholder {
                color: ${props.theme.color.text.beta};
            }

            background-color: ${props.theme.color.default};
            cursor: not-allowed;
            outline: 0;

            &:hover,
            &:focus {
                outline: 0;
                box-shadow: none;
                border: 1px solid ${props.theme.color.border};
            }
        `}

    &::placeholder {
        color: ${(props) => props.theme.color.text.beta};
    }

    // Hide IE clear button
    &::-ms-clear {
        display: none;
    }

    ${(props) =>
        props.isFullWidth &&
        css`
            width: 100%;
        `}

    ${(props) =>
        props.size === 'small' &&
        css`
            font-size: ${props.theme.font.size.sm};

            i + span,
            span + i {
                margin-left: ${props.theme.margin.sm};
            }
        `}
  
    ${(props) =>
        props.size === 'medium' &&
        css`
            font-size: ${props.theme.font.size.md};
        `}
  
    ${(props) =>
        props.size === 'large' &&
        css`
            font-size: ${props.theme.font.size.lg};

            i + span,
            span + i {
                margin-left: ${props.theme.margin.lg};
            }
        `}

    resize: ${({ allowResize = false }) => (allowResize ? `both` : `none`)};
`;
