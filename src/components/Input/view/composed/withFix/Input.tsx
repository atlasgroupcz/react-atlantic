import React, { FC } from 'react';
import { InputFixProps } from './types';
import { StyledComposedInput, StyledPrefix, StyledSuffix } from './style';
import { InputBase } from '../../base';
import { PropsWithoutChildren } from '../../../../../types';

export type InputFixType = FC<PropsWithoutChildren<InputFixProps>>;

export const InputWrapper: InputFixType = ({ prefix, suffix, ...props }) => {
    return (
        <StyledComposedInput isPrefix={!!prefix} isSuffix={!!suffix}>
            {prefix && <StyledPrefix>{prefix}</StyledPrefix>}
            <InputBase {...props} />
            {suffix && <StyledSuffix>{suffix}</StyledSuffix>}
        </StyledComposedInput>
    );
};
