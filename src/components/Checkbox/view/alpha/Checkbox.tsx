import React from 'react';
import {
    HiddenCheckbox,
    StyledCheckboxIcon,
    StyledCheckboxInputShown,
    StyledCheckboxLabel,
    StyledCheckboxMark,
    StyledCheckboxSpan,
} from './styles';
import { CheckboxType } from '../../types';

export const Checkbox: CheckboxType = ({
    isPartiallyChecked,
    horizontalPosition = 'left',
    isDisabled,
    children,
    id,
    isChecked,
    className,
    size = 'small',
    ...props
}) => (
    <StyledCheckboxLabel
        isChecked={isChecked}
        isDisabled={isDisabled}
        className={className}
        htmlFor={id}
        size={size}
    >
        {horizontalPosition === 'right' && children && (
            <StyledCheckboxSpan
                position={horizontalPosition}
                isDisabled={isDisabled}
                size={size}
            >
                {children}
            </StyledCheckboxSpan>
        )}

        <HiddenCheckbox
            id={id}
            readOnly
            defaultChecked={isChecked}
            disabled={isDisabled}
            {...props}
        />

        <StyledCheckboxInputShown isDisabled={isDisabled}>
            <StyledCheckboxMark
                isDisabled={isDisabled}
                isChecked={isChecked}
                isPartiallyChecked={isPartiallyChecked}
            >
                <StyledCheckboxIcon
                    name={`check`}
                    isDisabled={isDisabled}
                    isChecked={isChecked}
                    isPartiallyChecked={isPartiallyChecked}
                />
            </StyledCheckboxMark>
        </StyledCheckboxInputShown>

        {horizontalPosition === 'left' && children && (
            <StyledCheckboxSpan
                position={horizontalPosition}
                isDisabled={isDisabled}
                size={size}
            >
                {children}
            </StyledCheckboxSpan>
        )}
    </StyledCheckboxLabel>
);
