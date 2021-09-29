import { wrap } from '@atlasgroup/react-wrap';
import React, { useMemo } from 'react';
import { Select as SelectView, SelectProps, useSelect } from '..';
import { disableOnEvent, crossOut } from './disableOnEvent';

const Select = wrap(SelectView, useSelect);

export default {
    title: 'Select',
    component: SelectView,
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
    const options = useMemo(
        () => [
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
        ],
        []
    );

    return <Select options={options} isDisabled={isDisabled} isOpen={isOpen} />;
};
