import React, { FC, forwardRef } from 'react';
import { SelectProps } from '../types';
import { default as ReactSelect } from 'react-select';
import { defaultComponents } from './DefaultComponents';

export type SelectType = FC<SelectProps>;

export const Select: SelectType = forwardRef<ReactSelect, SelectProps>(
    (
        {
            isSearchable = false,
            blurInputOnSelect = true,
            isMulti = false,
            isFullWidth = false,
            size = 'medium',
            ...props
        },
        ref
    ) => {
        return (
            <ReactSelect
                isSearchable={isSearchable}
                blurInputOnSelect={blurInputOnSelect}
                size={size}
                isMulti={isMulti}
                components={defaultComponents({
                    isFullWidth,
                    size,
                    isMulti,
                    ...props,
                })}
                ref={ref}
                {...props}
            />
        );
    }
);

Select.displayName = `Select`;
