import React, { forwardRef, MouseEvent, useRef } from 'react';
import { SelectMultiProps } from '../../types';
import { SelectMultiOption } from './components';
import {
    StyledSelectMultiContainer,
    StyledSelectMultiInput,
    StyledSelectMultiInputIcon,
    StyledSelectMultiInputValue,
    StyledSelectMultiList,
    StyledSelectMultiListItem,
    StyledSelectMultiInputOverflowNumber,
} from './styles';
import { Icon } from '../../../Icon';
import { calculateItemVisibility } from '../../utils/calculateItemVisibility';

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
            onClear,
            ...props
        },
        ref
    ) => {
        const valueContainerRef = useRef<HTMLDivElement | null>(null);
        const { hiddenItemsNumber, visibleItems } = calculateItemVisibility(
            valueContainerRef,
            values
        );

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
                        ref={valueContainerRef}
                        size={size}
                        isOptionSelected={isOptionSelected}
                    >
                        {isOptionSelected && visibleItems
                            ? visibleItems.map((value) => (
                                  <SelectedOption
                                      size={size}
                                      value={value.label}
                                      onClick={(event) =>
                                          onValueClick?.(value, event)
                                      }
                                  />
                              ))
                            : placeholder}
                        {!!hiddenItemsNumber && (
                            <StyledSelectMultiInputOverflowNumber>{`+${hiddenItemsNumber}`}</StyledSelectMultiInputOverflowNumber>
                        )}
                    </StyledSelectMultiInputValue>
                    <StyledSelectMultiInputIcon
                        size={size}
                        name={isOpen ? 'arrowUp' : 'arrowDown'}
                    />
                </StyledSelectMultiInput>

                {isOpen && options && (
                    <StyledSelectMultiList>
                        {options.map((option) => (
                            <>
                                <StyledSelectMultiListItem
                                    key={`${option.value}`}
                                    size={size}
                                    onClick={(event) =>
                                        onOptionClick?.(option, event)
                                    }
                                >
                                    {option?.isSelected && (
                                        <Icon name="check" />
                                    )}
                                    {option.label}
                                </StyledSelectMultiListItem>
                            </>
                        ))}
                    </StyledSelectMultiList>
                )}
            </StyledSelectMultiContainer>
        );
    }
);
