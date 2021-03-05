import React from 'react';
import { CheckSimple } from '../../../../Icons';
import {
    HiddenCheckbox,
    StyledCheckboxIcon,
    StyledCheckboxInputShown,
    StyledCheckboxLabel,
    StyledCheckboxMark,
    StyledCheckboxSpan,
} from './style';
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
                    isDisabled={isDisabled}
                    isChecked={isChecked}
                    isPartiallyChecked={isPartiallyChecked}
                >
                    <CheckSimple />
                </StyledCheckboxIcon>
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
