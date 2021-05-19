import React, { forwardRef } from 'react';
import { InputFloatingLabelProps } from '../../types';
import { useInputFloatingLabel } from '../../hooks';
import { InputPrefix, InputSuffix } from '../../components';
import {
    StyledInputFloatingLabelContainer,
    StyledInputFloatingLabelInput,
    StyledInputFloatingLabelInputContainer,
    StyledInputFloatingLabelLabel,
} from './styles';

export const InputFloatingLabelView = forwardRef<
    HTMLInputElement,
    InputFloatingLabelProps
>(({ className, value, label, prefix, suffix, ...props }, ref) => {
    const { setInputFocus, handleSetRef } = useInputFloatingLabel({ ref });

    return (
        <StyledInputFloatingLabelContainer
            className={className}
            onClick={setInputFocus}
            {...props}
        >
            {prefix && <InputPrefix>{prefix}</InputPrefix>}
            <StyledInputFloatingLabelInputContainer>
                <StyledInputFloatingLabelInput {...props} ref={handleSetRef} />
                {label && (
                    <StyledInputFloatingLabelLabel>
                        {label}
                    </StyledInputFloatingLabelLabel>
                )}
            </StyledInputFloatingLabelInputContainer>
            {suffix && <InputSuffix>{suffix}</InputSuffix>}
        </StyledInputFloatingLabelContainer>
    );
});
