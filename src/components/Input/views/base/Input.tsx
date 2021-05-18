import React, { FC, forwardRef } from 'react';
import { StyledInput } from './styles';
import { InputProps } from './types';

export type InputBaseType = FC<InputProps>;

export const InputBase: InputBaseType = forwardRef<
    HTMLInputElement,
    InputProps
>(({ ...props }, ref) => {
    return <StyledInput disabled={props.isDisabled} {...props} ref={ref} />;
});
