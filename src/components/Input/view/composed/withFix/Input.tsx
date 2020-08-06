import React, { FC } from 'react';
import { InputFixProps } from './types';
import { StyledComposedInput, StyledPrefix, StyledSuffix } from './style';
import { InputBase } from '../../base';

export type InputFixType = FC<InputFixProps>;

export const InputWrapper: InputFixType = ({ prefix, suffix, ...props }) => {
    return (
        <StyledComposedInput isPrefix={!!prefix} isSuffix={!!suffix}>
            {prefix && <StyledPrefix>{prefix}</StyledPrefix>}
            <InputBase {...props} />
            {suffix && <StyledSuffix>{suffix}</StyledSuffix>}
        </StyledComposedInput>
    );
};
