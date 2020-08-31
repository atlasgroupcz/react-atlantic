import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { InputProps } from '../types';
import {
    isDisabledInput,
    isRoundInput,
    sizeDiffInput,
    isFullWidthMixin,
} from './parts';

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


    ${(props) => isDisabledInput(props.isDisabled, props.theme)}
    ${(props) => isRoundInput(props.isRound, props.theme)}
    ${(props) => sizeDiffInput(props.size, props.theme)}
    ${isFullWidthMixin(true)}
`;

type StyledInputSpanProps = {
    isPrefix?: boolean;
    isSuffix?: boolean;
} & Pick<InputProps, 'isFullWidth' | 'size'>;

// export const StyledInputSpan = styled.span<StyledInputSpanProps>`
//     display: inline-block;
//     position: relative;
//     ${(props) => sizeInput(props.size)}
//     ${(props) => isFullWidthMixin(props.isFullWidth)}
//     ${(props) => fixPadding(props.isPrefix, props.isSuffix)}

// `;
