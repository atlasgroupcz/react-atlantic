import React, { forwardRef } from 'react';
import { SelectProps } from '../../types';
import {
    StyledDefaultSelect,
    StyledDefaultSelectContainer,
    StyledDefaultSelectIconContainer,
    StyledDefaultSelectList,
    StyledDefaultSelectListItem,
    StyledDefaultSelectValue,
} from './styles';
import { Icon } from '../../../Icon/view';

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
            ...rest
        },
        ref
    ) => (
        <StyledDefaultSelectContainer
            {...rest}
            isFullWidth={isFullWidth}
            ref={ref}
            className={className}
        >
            <StyledDefaultSelect onClick={onClick} isOpen={isOpen} size={size}>
                <StyledDefaultSelectValue isOptionSelected={!!value?.label}>
                    {value?.label || placeholder}
                </StyledDefaultSelectValue>
                <StyledDefaultSelectIconContainer>
                    <Icon name={isOpen ? 'arrowUp' : 'arrowDown'} />
                </StyledDefaultSelectIconContainer>
            </StyledDefaultSelect>

            {isOpen && !!options?.length && (
                <StyledDefaultSelectList>
                    {options.map((option) => (
                        <StyledDefaultSelectListItem
                            key={`${option.value}`}
                            size={size}
                            onClick={() => onOptionClick?.(option)}
                        >
                            {option.label}
                        </StyledDefaultSelectListItem>
                    ))}
                </StyledDefaultSelectList>
            )}
        </StyledDefaultSelectContainer>
    )
);

Select.displayName = `Select`;
