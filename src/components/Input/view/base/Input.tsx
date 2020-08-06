import React, { FC } from 'react';
import { StyledInput } from './style';
import { InputProps } from './types';

export type InputBaseType = FC<InputProps>;

export const InputBase: InputBaseType = (props) => {
    return <StyledInput {...props} />;
};
