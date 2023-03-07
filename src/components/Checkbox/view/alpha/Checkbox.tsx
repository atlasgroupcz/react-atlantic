import React, { forwardRef, PropsWithChildren } from 'react';
import {
    HiddenCheckbox,
    StyledCheckboxInputShown,
    StyledCheckboxLabel,
    StyledCheckboxMark,
    StyledCheckboxSpan,
} from './styles';
import { Icon } from '../../../Icon';
import { CheckboxProps } from '../../types';

export const Checkbox = forwardRef<HTMLDivElement, PropsWithChildren<CheckboxProps>>(
    ({
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
            data-size={size}
        >
            {horizontalPosition === 'right' && children && (
                <StyledCheckboxSpan
                    position={horizontalPosition}
                    isDisabled={isDisabled}
                    size={size}
                    data-is-disabled={isDisabled}
                    data-size={size}
                >
                    {children}
                </StyledCheckboxSpan>
            )}

            <HiddenCheckbox id={id} readOnly defaultChecked={isChecked} disabled={isDisabled} {...props} />
            <StyledCheckboxInputShown isDisabled={isDisabled} data-is-disabled={isDisabled}>
                <StyledCheckboxMark
                    isDisabled={isDisabled}
                    isChecked={isChecked}
                    isPartiallyChecked={isPartiallyChecked}
                    data-is-disabled={isDisabled}
                    data-is-checked={isChecked}
                    data-is-partially-checked={isPartiallyChecked}
                >
                    <Icon name="check" />
                </StyledCheckboxMark>
            </StyledCheckboxInputShown>

            {horizontalPosition === 'left' && children && (
                <StyledCheckboxSpan
                    position={horizontalPosition}
                    isDisabled={isDisabled}
                    size={size}
                    data-is-disabled={isDisabled}
                    data-size={size}
                >
                    {children}
                </StyledCheckboxSpan>
            )}
        </StyledCheckboxLabel>
    )
);
