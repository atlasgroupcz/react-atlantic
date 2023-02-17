import React, { forwardRef, MouseEvent } from 'react';
import { SelectProps } from '../../types';
import {
    StyledSelectDefaultContainer,
    StyledSelectDefaultInput,
    StyledSelectDefaultInputIcon,
    StyledSelectDefaultInputValue,
    StyledSelectDefaultList,
    StyledSelectDefaultListItem,
} from './styles';

export const Select = forwardRef<HTMLDivElement, SelectProps<any>>(
    (
        {
            isOpen,
            options,
            onOptionClick,
            onClick,
            placeholder,
            value,
            isDisabled,
            isFullWidth,
            size = 'medium',
            className,
            isOptionSelected,
            ...rest
        },
        ref
    ) => (
        <StyledSelectDefaultContainer {...rest} isFullWidth={isFullWidth} ref={ref} className={className}>
            <StyledSelectDefaultInput
                onClick={(e: MouseEvent<HTMLDivElement>) => !isDisabled && onClick?.(e!)}
                isOpen={isOpen}
                size={size}
                isDisabled={isDisabled}
                data-is-disabled={isDisabled}
            >
                <StyledSelectDefaultInputValue size={size} isOptionSelected={isOptionSelected}>
                    {isOptionSelected ? value.label : placeholder}
                </StyledSelectDefaultInputValue>
                <StyledSelectDefaultInputIcon size={size} name={isOpen ? 'arrowUp' : 'arrowDown'} />
            </StyledSelectDefaultInput>

            {isOpen && !!options?.length && (
                <StyledSelectDefaultList>
                    {options.map((option) => (
                        <StyledSelectDefaultListItem
                            key={`${option.value}`}
                            size={size}
                            onClick={() => onOptionClick?.(option)}
                        >
                            {option.label}
                        </StyledSelectDefaultListItem>
                    ))}
                </StyledSelectDefaultList>
            )}
        </StyledSelectDefaultContainer>
    )
);

Select.displayName = `Select`;
