import React from 'react';
import { StyledInput } from './style';
import { InputProps } from '../types';
import { FC } from 'react';

export type InputType = FC<InputProps>;
export const InputView: InputType = (props) => {
    return <StyledInput {...props} />;
};
