import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { InputProps } from '../types';
import { ThemeConfig } from 'react-select/src/theme';
import { ThemeType } from '../../../../../theme';

type IsFullWidthMixin = (
    value: InputProps['isFullWidth']
) => ReturnType<typeof css> | null;
export const isFullWidthMixin: IsFullWidthMixin = (value) => {
    return value
        ? css`
              width: 100%;
          `
        : null;
};

export const StyledInput = styled(
    forwardRef<HTMLInputElement, InputProps>(
        ({ size, isRound, isFullWidth, isDisabled, ...props }, ref) => (
            <input {...props} ref={ref} />
        )
    )
)<InputProps>`
  font-family: ${(props) => props.theme.font.family};
  padding: ${(props) => props.theme.padding.sm} ${(props) =>
    props.theme.padding.md};
  height: ${(props) => props.theme.height.md};
  margin: 0;
  position: relative;
  display: inline-block;

  font-size: ${(props) => props.theme.font.size.md};
  font-weight: 400;
  white-space: nowrap;
  text-overflow: ellipsis;
  user-select: text;
  -webkit-appearance: none;
  touch-action: manipulation;

  background-color: ${(props) => props.theme.color.background.alpha};
  color: ${(props) => props.theme.color.text.alpha};
  border-radius: ${(props) => props.theme.radius};
  outline: 0;
  list-style: none;

  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  border: 1px solid ${(props) => props.theme.color.border};

  ::placeholder {
    color: ${(props) => props.theme.color.text.beta};
  }

  :focus {
    border-color: ${(props) => props.theme.color.primary.alpha};
    outline-offset: -2px;
  }
  
  // Hide IE clear button
  &::-ms-clear {
    display: none;
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

  ${(props) =>
      props.isRound &&
      css`
          border-radius: ${props.theme.rounded};

          &:not(.disabled):not(.transparent) {
              &:focus {
                  &:after {
                      border-radius: ${props.theme.rounded};
                  }
              }
          }
      `} 

  ${(props) =>
      props.size === 'small' &&
      css`
          height: ${props.theme.height.sm};
          font-size: 12px;

          i + span,
          span + i {
              margin-left: ${props.theme.margin.sm};
          }
      `} 
  
    ${(props) =>
        props.size === 'large' &&
        css`
            height: ${props.theme.height.lg};
            font-size: ${props.theme.font.size.lg};

            i + span,
            span + i {
                margin-left: ${props.theme.margin.lg};
            }
        `} 
    
    ${isFullWidthMixin(true)}
`;

type StyledInputSpanProps = {
    isPrefix?: boolean;
    isSuffix?: boolean;
} & Pick<InputProps, 'isFullWidth' | 'size'>;

export const StyledInputSpan = styled.span<StyledInputSpanProps>`
    display: inline-block;
    position: relative;
    ${(props) => sizeInput(props.size, props.theme)}
    ${(props) => isFullWidthMixin(props.isFullWidth)}
    
    ${StyledInput} {
        ${(props) =>
            props.isPrefix &&
            css`
                padding-left: 30px;
            `}

        ${(props) =>
            props.isSuffix &&
            css`
                padding-right: 30px;
            `}
    }
`;

type SizeInput = (
    size: InputProps['size'],
    theme: ThemeType
) => ReturnType<typeof css>;

export const sizeInput: SizeInput = (size, theme) => {
    switch (size) {
        case 'large':
            return sizeLarge(theme);
        case 'small':
            return sizeMedium(theme);
        default:
            return sizeSmall(theme);
    }
};

type SpecificSizeInput = (theme: ThemeType) => ReturnType<typeof css>;
const sizeLarge: SpecificSizeInput = (theme) => css`
    width: 220px;
`;
const sizeSmall: SpecificSizeInput = (theme) => css`
    width: 180px;
`;
const sizeMedium: SpecificSizeInput = (theme) => css`
    width: 200px;
`;
