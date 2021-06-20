import React, { forwardRef, MouseEvent } from 'react';
import { SelectMultiProps } from '../../types';
import { SelectMultiOption } from './components';
import {
    StyledSelectMultiContainer,
    StyledSelectMultiInput,
    StyledSelectMultiInputIcon,
    StyledSelectMultiInputValue,
    StyledSelectMultiList,
    StyledSelectMultiListItem,
} from './styles';

export const SelectMulti = forwardRef<HTMLDivElement, SelectMultiProps>(
    (
        {
            isFullWidth,
            isOpen,
            options,
            size = 'medium',
            onOptionClick,
            className,
            isDisabled,
            onClick,
            values,
            placeholder,
            onValueClick,
            isOptionSelected,
            SelectedOption = SelectMultiOption,
            ...props
        },
        ref
    ) => {
        return (
            <StyledSelectMultiContainer
                isFullWidth={isFullWidth}
                ref={ref}
                className={className}
                {...props}
            >
                <StyledSelectMultiInput
                    onClick={(e: MouseEvent<HTMLDivElement>) =>
                        !isDisabled && onClick?.(e!)
                    }
                    isOpen={isOpen}
                    size={size}
                    isDisabled={isDisabled}
                >
                    <StyledSelectMultiInputValue
                        size={size}
                        isOptionSelected={isOptionSelected}
                    >
                        {isOptionSelected && values
                            ? values.map((value) => (
                                  <SelectedOption
                                      size={size}
                                      value={value.label}
                                      onClick={(event) =>
                                          onValueClick?.(value, event)
                                      }
                                  />
                              ))
                            : placeholder}
                    </StyledSelectMultiInputValue>
                    <StyledSelectMultiInputIcon
                        size={size}
                        name={isOpen ? 'arrowUp' : 'arrowDown'}
                    />
                </StyledSelectMultiInput>

                {isOpen && options && (
                    <StyledSelectMultiList>
                        {options.map((option) => (
                            <StyledSelectMultiListItem
                                key={`${option.value}`}
                                size={size}
                                onClick={() => onOptionClick?.(option)}
                            >
                                {option.label}
                            </StyledSelectMultiListItem>
                        ))}
                    </StyledSelectMultiList>
                )}
            </StyledSelectMultiContainer>
        );
    }
);
