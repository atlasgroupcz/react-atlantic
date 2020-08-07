import React from 'react';
import { FC } from 'react';
import { InputBase } from './base';
import { InputProps } from './base/types';
import { PropsWithoutChildren } from '../../..';
import { InputFixProps } from './composed/withFix/types';
import { InputWrapper as InputWrapperWithFix } from './composed';

export type InputType = FC<PropsWithoutChildren<InputFixProps & InputProps>>;

export const Input: InputType = ({ prefix, suffix, ...props }) => {
    if (prefix || suffix) {
        return (
            <InputWrapperWithFix {...props} prefix={prefix} suffix={suffix} />
        );
    }
    return <InputBase {...props} />;
};
