import React, { forwardRef } from 'react';
import { FC } from 'react';
import { InputBase } from './base';
import { InputProps } from './base/types';
import { PropsWithoutChildren } from '../../../types';
import { InputFixProps } from './composed/withFix/types';
import { InputWrapper as InputWrapperWithFix } from './composed';

export type InputType = FC<PropsWithoutChildren<InputFixProps & InputProps>>;

export const Input: InputType = forwardRef(
    ({ prefix, suffix, ...props }, ref) => {
        if (prefix || suffix) {
            return (
                <InputWrapperWithFix
                    {...props}
                    prefix={prefix}
                    suffix={suffix}
                    ref={ref}
                />
            );
        }
        return <InputBase {...props} ref={ref} />;
    }
);
