import React, { FC, forwardRef } from 'react';
import { StyledInput } from './style';
import { InputProps } from './types';
import { RefType } from '../../../../types/Ref';

export type InputBaseType = FC<InputProps>;

export const InputBase: InputBaseType = forwardRef(
    ({ size = 'medium', ...props }, ref: RefType<HTMLInputElement>) => {
        return <StyledInput {...props} ref={ref} size={size} />;
    }
);
