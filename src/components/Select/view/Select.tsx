import React, { FC, forwardRef, useMemo } from 'react';
import { OptionType, SelectProps } from '../types';
import { default as ReactSelect } from 'react-select';
import { defaultSelectComponents } from './defaultSelectComponents';
import { RefType } from '../../../types/Ref';
import { ReactElement } from 'react';

export const Select = forwardRef<ReactSelect, SelectProps>(
    (
        {
            isSearchable = false,
            blurInputOnSelect = true,
            isMulti = false,
            isFullWidth = false,
            size = 'medium',
            components,
            value,
            ...props
        },
        ref
    ) => {
        const memoizedComponents = useMemo(
            () => defaultSelectComponents(size, isFullWidth),
            [size, isFullWidth]
        );

        return (
            <ReactSelect
                value={value}
                isSearchable={isSearchable}
                blurInputOnSelect={blurInputOnSelect}
                size={size}
                isMulti={isMulti}
                components={memoizedComponents}
                ref={ref}
                {...props}
            />
        );
    }
) as Omit<FC, '()'> &
    (<T extends OptionType>(
        p: SelectProps<T> & { ref?: RefType<ReactSelect> }
    ) => ReactElement);

Select.displayName = `Select`;
