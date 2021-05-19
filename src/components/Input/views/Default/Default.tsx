import React, { forwardRef } from 'react';
import { InputDefaultProps } from '../../types';
import {
    InputBase,
    InputContainer,
    InputPrefix,
    InputSuffix,
} from '../../components';
import { useInputDefault } from '../../hooks';

export const InputDefaultView = forwardRef<HTMLInputElement, InputDefaultProps>(
    ({ className, prefix, suffix, ...props }, ref) => {
        const { setInputFocus, handleSetRef } = useInputDefault({ ref });

        return (
            <InputContainer
                className={className}
                onClick={setInputFocus}
                {...props}
            >
                {prefix && <InputPrefix>{prefix}</InputPrefix>}
                <InputBase {...props} ref={handleSetRef} />
                {suffix && <InputSuffix>{suffix}</InputSuffix>}
            </InputContainer>
        );
    }
);
