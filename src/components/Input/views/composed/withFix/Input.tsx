import React, { FC, useRef, useCallback, forwardRef } from 'react';
import { InputFixProps } from './types';
import {
    StyledInputPrefix,
    StyledInputSuffix,
    StyledInputContainer,
} from './styles';
import { InputBase } from '../../base';
import { PropsWithoutChildren } from '../../../../../types';
import { handleParentRef } from '../../../../../utils';

export type InputFixType = FC<PropsWithoutChildren<InputFixProps>>;

export const InputWrapper: InputFixType = forwardRef<
    HTMLInputElement,
    InputFixProps
>(({ prefix, suffix, size = 'medium', className, ...props }, ref) => {
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
        <StyledInputContainer
            className={className}
            onClick={handleFocus}
            isPrefix={!!prefix}
            isSuffix={!!suffix}
            size={size}
            isFullWidth={props.isFullWidth}
            isDisabled={props.isDisabled}
            isRound={props.isRound}
        >
            {prefix && <StyledInputPrefix>{prefix}</StyledInputPrefix>}
            <InputBase {...props} ref={handleSetRef} size={size} />
            {suffix && <StyledInputSuffix>{suffix}</StyledInputSuffix>}
        </StyledInputContainer>
    );
});
