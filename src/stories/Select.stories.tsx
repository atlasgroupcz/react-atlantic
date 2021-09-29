import { wrap } from '@atlasgroup/react-wrap';
import React, { useMemo } from 'react';
import { Select as SelectView, SelectProps, useSelect } from '..';
import { disableOnEvent, crossOut, disable } from './disableOnEvent';

const Select = wrap(SelectView, useSelect);

export default {
    title: 'Select',
    component: SelectView,
    argTypes: {
        isDisabled: {
            name: 'isDisabled',
            defaultValue: false,
        },
        isOpen: disable,
        placeholder: crossOut,
        size: disable,
        isFullWidth: disable,
        value: crossOut,
        onOptionClick: crossOut,
        options: crossOut,
        isOptionSelected: crossOut,
        visibleRows: crossOut,
        ...disableOnEvent,
    },
};

export const Overview = ({ isDisabled }: SelectProps) => {
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

    return <Select options={options} isDisabled={isDisabled} />;
};
