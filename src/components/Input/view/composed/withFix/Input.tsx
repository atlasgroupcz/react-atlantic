import React, { FC, useRef, useCallback, forwardRef } from 'react';
import { InputFixProps } from './types';
import { StyledComposedInput, StyledPrefix, StyledSuffix } from './style';
import { InputBase } from '../../base';
import { PropsWithoutChildren } from '../../../../../types';
import { handleParentRef } from '../../../../../utils';

export type InputFixType = FC<PropsWithoutChildren<InputFixProps>>;

export const InputWrapper: InputFixType = forwardRef<
    HTMLInputElement,
    InputFixProps
>(({ prefix, suffix, ...props }, ref) => {
    let inputRef = useRef<HTMLInputElement | null>(null);

    const handleFocus = useCallback(
        (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
            inputRef.current?.focus();
        },
        []
    );

    const handleSetRef = useCallback(
        (instance: HTMLInputElement | null): void => {
            inputRef.current = instance;
            handleParentRef(ref, instance);
        },
        [ref]
    );

    return (
        <StyledComposedInput
            onClick={handleFocus}
            isPrefix={!!prefix}
            isSuffix={!!suffix}
        >
            {prefix && <StyledPrefix>{prefix}</StyledPrefix>}
            <InputBase {...props} ref={handleSetRef} />
            {suffix && <StyledSuffix>{suffix}</StyledSuffix>}
        </StyledComposedInput>
    );
});
