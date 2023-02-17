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
    StyledSelectMultiInputHiddenItemsNumber,
    StyledSelectMultiInputClearButton,
} from './styles';
import { Icon } from '../../../Icon';
import { useCalculateItemVisibility } from '../../utils/calculateItemVisibility';

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
        const { hiddenItemsNumber, visibleItems } = useCalculateItemVisibility(valueContainerRef, values);

        return (
            <StyledSelectMultiContainer
                isFullWidth={isFullWidth}
                data-is-full-width={isFullWidth}
                ref={ref}
                className={className}
                {...props}
            >
                <StyledSelectMultiInput
                    onClick={(e: MouseEvent<HTMLDivElement>) => !isDisabled && onClick?.(e!)}
                    isOpen={isOpen}
                    size={size}
                    isDisabled={isDisabled}
                    data-is-disabled={isDisabled}
                    data-is-open={isOpen}
                    data-size={size}
                >
                    <StyledSelectMultiInputValue
                        ref={valueContainerRef}
                        size={size}
                        isOptionSelected={isOptionSelected}
                        data-size={size}
                    >
                        {isOptionSelected && visibleItems
                            ? visibleItems.map((value) => (
                                  <SelectedOption
                                      size={size}
                                      value={value.label}
                                      onClick={(event) => onValueClick?.(value, event)}
                                      data-size={size}
                                  />
                              ))
                            : placeholder}
                        {!!hiddenItemsNumber && (
                            <StyledSelectMultiInputHiddenItemsNumber>{`+${hiddenItemsNumber}`}</StyledSelectMultiInputHiddenItemsNumber>
                        )}
                    </StyledSelectMultiInputValue>
                    {onClear && isOptionSelected && (
                        <StyledSelectMultiInputClearButton onClick={onClear} size={size} data-size={size}>
                            <Icon name="clear" />
                        </StyledSelectMultiInputClearButton>
                    )}
                    <StyledSelectMultiInputIcon size={size} name={isOpen ? 'arrowUp' : 'arrowDown'} data-size={size} />
                </StyledSelectMultiInput>

                {isOpen && options && (
                    <StyledSelectMultiList>
                        {options.map((option) => (
                            <>
                                <StyledSelectMultiListItem
                                    isSelected={option.isSelected}
                                    key={`${option.value}`}
                                    size={size}
                                    onClick={(event) => onOptionClick?.(option, event)}
                                    data-is-selected={option.isSelected}
                                    data-size={size}
                                >
                                    {option?.isSelected && <Icon name="check" />}
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
