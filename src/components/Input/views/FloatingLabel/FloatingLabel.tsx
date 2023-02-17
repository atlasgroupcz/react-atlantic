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

export const InputFloatingLabelView = forwardRef<HTMLInputElement, InputFloatingLabelProps>(
    ({ className, label, prefix, suffix, placeholder = ' ', ...props }, ref) => {
        const { setInputFocus, handleSetRef } = useInputFloatingLabel({ ref });

        return (
            <StyledInputFloatingLabelContainer
                className={className}
                onClick={setInputFocus}
                size={props.size}
                isFullWidth={props.isFullWidth}
                isDisabled={props.isDisabled}
                isRound={props.isRound}
                data-is-disabled={props.isDisabled}
                data-is-full-width={props.isFullWidth}
                data-is-round={props.isRound}
            >
                {prefix && <InputPrefix>{prefix}</InputPrefix>}
                <StyledInputFloatingLabelInputContainer>
                    <StyledInputFloatingLabelInput placeholder={placeholder} {...props} ref={handleSetRef} />
                    {label && <StyledInputFloatingLabelLabel>{label}</StyledInputFloatingLabelLabel>}
                </StyledInputFloatingLabelInputContainer>
                {suffix && <InputSuffix>{suffix}</InputSuffix>}
            </StyledInputFloatingLabelContainer>
        );
    }
);
