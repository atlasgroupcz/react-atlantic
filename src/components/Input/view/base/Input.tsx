import React, { FC } from 'react';
import { StyledInput } from './style';
import { InputProps } from './types';

export type InputBaseType = FC<InputProps>;

export const InputBase: InputBaseType = ({ size = 'medium', ...props }) => {
    return <StyledInput {...props} size={size} />;
};
