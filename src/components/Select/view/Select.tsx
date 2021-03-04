import React, { forwardRef } from 'react';
import { SelectProps } from '../types';

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
            ...rest
        },
        ref
    ) => (
        <div {...rest} ref={ref}>
            <div onClick={onClick}>{value?.label || placeholder}</div>

            {isOpen && !!options?.length && (
                <ul>
                    {options.map((option) => (
                        <li
                            key={`${option.value}`}
                            onClick={() => onOptionClick?.(option)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
);

Select.displayName = `Select`;
