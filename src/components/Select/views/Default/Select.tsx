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
        <StyledSelectDefaultContainer
            {...rest}
            isFullWidth={isFullWidth}
            ref={ref}
            className={className}
            data-is-full-width={isFullWidth}
        >
            <StyledSelectDefaultInput
                onClick={(e: MouseEvent<HTMLDivElement>) => !isDisabled && onClick?.(e!)}
                isOpen={isOpen}
                size={size}
                isDisabled={isDisabled}
                data-is-disabled={isDisabled}
                data-is-open={isOpen}
                data-size={size}
            >
                <StyledSelectDefaultInputValue
                    size={size}
                    isOptionSelected={isOptionSelected}
                    data-size={size}
                    data-is-option-selected={isOptionSelected}
                >
                    {isOptionSelected ? value.label : placeholder}
                </StyledSelectDefaultInputValue>
                <StyledSelectDefaultInputIcon size={size} name={isOpen ? 'arrowUp' : 'arrowDown'} data-size={size} />
            </StyledSelectDefaultInput>

            {isOpen && !!options?.length && (
                <StyledSelectDefaultList>
                    {options.map((option) => (
                        <StyledSelectDefaultListItem
                            key={`${option.value}`}
                            size={size}
                            onClick={() => onOptionClick?.(option)}
                            data-size={size}
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
