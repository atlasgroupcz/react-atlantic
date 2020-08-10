import React, { FC, forwardRef } from 'react';
import { StyledInput } from './style';
import { InputProps } from './types';
import { RefType } from '../../../../types/Ref';

export type InputBaseType = FC<InputProps>;

export const InputBase: InputBaseType = forwardRef<
    HTMLInputElement,
    InputProps
>(({ size = 'medium', ...props }, ref) => {
    return <StyledInput {...props} ref={ref} size={size} />;
});
