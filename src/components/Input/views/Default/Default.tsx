import React, { forwardRef } from 'react';
import { InputDefaultProps } from '../../types';
import {
    InputBase,
    InputContainer,
    InputPrefix,
    InputSuffix,
} from '../../components';
import { useInputDefault } from './hooks/useInputDefault';

export const InputDefaultView = forwardRef<HTMLInputElement, InputDefaultProps>(
    ({ className, prefix, suffix, size, ...props }, ref) => {
        const { setInputFocus, handleSetRef } = useInputDefault({ ref });

        return (
            <InputContainer
                className={className}
                onClick={setInputFocus}
                isPrefix={!!prefix}
                isSuffix={!!suffix}
                size={size}
                isFullWidth={props.isFullWidth}
                isDisabled={props.isDisabled}
                isRound={props.isRound}
            >
                {prefix && <InputPrefix>{prefix}</InputPrefix>}
                <InputBase {...props} ref={handleSetRef} size={size} />
                {suffix && <InputSuffix>{suffix}</InputSuffix>}
            </InputContainer>
        );
    }
);
