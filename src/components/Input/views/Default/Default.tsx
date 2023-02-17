import React, { forwardRef } from 'react';
import { InputDefaultProps } from '../../types';
import { InputBase, InputContainer, InputPrefix, InputSuffix } from '../../components';
import { useInputDefault } from '../../hooks';

export const InputDefaultView = forwardRef<HTMLInputElement, InputDefaultProps>(
    ({ className, prefix, suffix, size = 'medium', ...props }, ref) => {
        const { setInputFocus, handleSetRef } = useInputDefault({ ref });

        return (
            <InputContainer
                className={className}
                onClick={setInputFocus}
                size={size}
                isFullWidth={props.isFullWidth}
                isDisabled={props.isDisabled}
                isRound={props.isRound}
                data-is-disabled={props.isDisabled}
            >
                {prefix && <InputPrefix>{prefix}</InputPrefix>}
                <InputBase {...props} size={size} ref={handleSetRef} />
                {suffix && <InputSuffix>{suffix}</InputSuffix>}
            </InputContainer>
        );
    }
);
