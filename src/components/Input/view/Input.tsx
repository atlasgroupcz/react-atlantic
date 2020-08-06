import React from 'react';
import { FC } from 'react';
import { InputBase } from './base';
import { InputProps } from './base/types';

export type InputType = FC<InputProps>;

export const Input: InputType = (props) => {
    return <InputBase {...props} />;
};
