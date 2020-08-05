import React from 'react';
import { StyledInput } from './style';
import { InputProps } from '../types';
import { FC } from 'react';

export const Input: FC<InputProps> = (props) => {
    return <StyledInput {...props} />;
};
