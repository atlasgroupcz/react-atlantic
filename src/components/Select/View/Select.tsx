import React, { FC, forwardRef } from 'react';
import { SelectProps } from '../Types';
import { default as ReactSelect } from 'react-select';
import { defaultComponents } from './DefaultComponents';

export type SelectType = FC<SelectProps>;

export const Select: SelectType = forwardRef<ReactSelect, SelectProps>(
    (
        {
            blurInputOnSelect = false,
            isMulti = true,
            isFullWidth = false,
            size = 'medium',
            ...props
        },
        ref
    ) => {
        return (
            <ReactSelect
                components={defaultComponents({ ...props })}
                {...props}
                ref={ref}
            />
        );
    }
);

Select.defaultProps = {
    isSearchable: false,
};

Select.displayName = `Select`;
