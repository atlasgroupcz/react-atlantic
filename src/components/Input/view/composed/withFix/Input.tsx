import React, { FC, useRef, useCallback, forwardRef } from 'react';
import { InputFixProps } from './types';
import { StyledInputPrefix, StyledInputSuffix } from './style';
import { InputBase } from '../../base';
import { PropsWithoutChildren } from '../../../../../types';
import { handleParentRef } from '../../../../../utils';
import { StyledInputSpan } from '../../base/style';

export type InputFixType = FC<PropsWithoutChildren<InputFixProps>>;

export const InputWrapper: InputFixType = forwardRef<
    HTMLInputElement,
    InputFixProps
>(({ prefix, suffix, isFullWidth, size, ...props }, ref) => {
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
        <StyledInputSpan
            onClick={handleFocus}
            isPrefix={!!prefix}
            isSuffix={!!suffix}
            isFullWidth={isFullWidth}
            size={size}
        >
            {prefix && <StyledInputPrefix>{prefix}</StyledInputPrefix>}
            <InputBase {...props} ref={handleSetRef} size={size} />
            {suffix && <StyledInputSuffix>{suffix}</StyledInputSuffix>}
        </StyledInputSpan>
    );
});
