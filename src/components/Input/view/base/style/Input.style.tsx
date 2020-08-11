import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { InputProps } from '../types';

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
  width: 200px;
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
          width: 180px;
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
            width: 220px;
            height: ${props.theme.height.lg};
            font-size: ${props.theme.font.size.lg};

            i + span,
            span + i {
                margin-left: ${props.theme.margin.lg};
            }
        `} 


    ${(props) =>
        props.isFullWidth &&
        css`
            width: 100%;
        `} 
`;
