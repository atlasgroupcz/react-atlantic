import React from 'react';
import { Select, SelectProps } from '..';
import { disableOnEvent, crossOut } from './disableOnEvent';

export default {
    title: 'Select',
    component: Select,
    argTypes: {
        placeholder: crossOut,
        size: {
            name: 'size',
            defaultValue: 'medium',
            control: {
                type: 'select',
            },
        },
        isDisabled: {
            name: 'isDisabled',
            defaultValue: false,
        },
        isFullWidth: {
            name: 'isFullWidth',
            defaultValue: false,
        },
        value: crossOut,
        isOpen: {
            name: 'isOpen',
            defaultValue: false,
        },
        onOptionClick: crossOut,
        options: crossOut,
        isOptionSelected: crossOut,
        visibleRows: crossOut,
        ...disableOnEvent,
    },
};

export const Overview = ({
    size,
    isDisabled,
    isFullWidth,
    isOpen,
}: SelectProps) => {
    const options = [
        {
            label: 'Česká Republika',
            value: 1,
        },
        {
            label: 'Slovenská Republika',
            value: 2,
        },
        {
            label: 'Evropa',
            value: 3,
        },
    ];

    return (
        <Select
            options={options}
            placeholder="Vyberte..."
            size={size}
            isDisabled={isDisabled}
            isFullWidth={isFullWidth}
            isOpen={isOpen}
        />
    );
};
