import React, { forwardRef } from 'react';
import { FC } from 'react';
import { InputBase } from './base';
import { InputProps } from './base/types';
import { PropsWithoutChildren } from '../../../types';
import { InputFixProps } from './composed/withFix/types';
import { InputWrapper as InputWrapperWithFix } from './composed';
import { StyledInputContainer } from './composed/withFix/style/InputContainer.style';

export type InputType = FC<PropsWithoutChildren<InputFixProps & InputProps>>;

export const Input: InputType = forwardRef(
    ({ prefix, suffix, size = 'medium', ...props }, ref) => {
        if (prefix || suffix) {
            return (
                <InputWrapperWithFix
                    {...props}
                    size={size}
                    prefix={prefix}
                    suffix={suffix}
                    ref={ref}
                />
            );
        }
        return (
            <StyledInputContainer
                size={size}
                isFullWidth={props.isFullWidth}
                isDisabled={props.isDisabled}
                isRound={props.isRound}
            >
                <InputBase {...props} ref={ref} />
            </StyledInputContainer>
        );
    }
);
