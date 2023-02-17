import React from 'react';
import {
    HiddenCheckbox,
    StyledCheckboxInputShown,
    StyledCheckboxLabel,
    StyledCheckboxMark,
    StyledCheckboxSpan,
} from './styles';
import { CheckboxType } from '../../types';
import { Icon } from '../../../Icon';

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
        data-is-disabled={isDisabled}
        data-is-checked={isChecked}
    >
        {horizontalPosition === 'right' && children && (
            <StyledCheckboxSpan position={horizontalPosition} isDisabled={isDisabled} size={size}>
                {children}
            </StyledCheckboxSpan>
        )}

        <HiddenCheckbox id={id} readOnly defaultChecked={isChecked} disabled={isDisabled} {...props} />
        <StyledCheckboxInputShown isDisabled={isDisabled}>
            <StyledCheckboxMark isDisabled={isDisabled} isChecked={isChecked} isPartiallyChecked={isPartiallyChecked}>
                <Icon name="check" />
            </StyledCheckboxMark>
        </StyledCheckboxInputShown>

        {horizontalPosition === 'left' && children && (
            <StyledCheckboxSpan position={horizontalPosition} isDisabled={isDisabled} size={size}>
                {children}
            </StyledCheckboxSpan>
        )}
    </StyledCheckboxLabel>
);
