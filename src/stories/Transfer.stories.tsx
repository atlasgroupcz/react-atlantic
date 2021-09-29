import React from 'react';
import { Transfer, TransferProps } from '../components/Transfer';
import { crossOut, disableOnEvent } from './disableOnEvent';

export default {
    title: 'Transfer',
    component: Transfer,
    argTypes: {
        isOpen: { name: 'isOpen', defaultValue: true },
        isSorted: { name: 'isSorted', defaultValue: false },
        isFullWidth: { name: 'isFullWidth', defaultValue: false },
        innerTransferController: crossOut,
        positionController: crossOut,
        size: crossOut,
        customWidth: crossOut,
        preferredPosition: crossOut,
        visibleRows: crossOut,
        hiddenTransferComponent: crossOut,
        leftHeader: crossOut,
        leftContainer: crossOut,
        rightHeader: crossOut,
        rightContainer: crossOut,
        footer: crossOut,
        noResults: crossOut,
        options: crossOut,
        onOptionClick: crossOut,
        value: crossOut,
        setValue: crossOut,
        setOpen: crossOut,
        isDisabled: crossOut,
        label: crossOut,
        ...disableOnEvent,
    },
};

const options = [
    {
        label: 'Label 0',
        value: 'Value 0',
    },
    {
        label: 'Label 1',
        value: 'Value 1',
    },
    {
        label: 'Label 2',
        value: 'Value 2',
    },
    {
        label: 'Label 3',
        value: 'Value 3',
    },
    {
        label: 'Label 4',
        value: 'Value 4',
    },
    {
        label: 'Label 5',
        value: 'Value 5',
    },
    {
        label: 'Label 6',
        value: 'Value 6',
    },
    {
        label: 'Label 7',
        value: 'Value 7',
    },
    {
        label: 'Label 8',
        value: 'Value 8',
    },
    {
        label: 'Label 9',
        value: 'Value 9',
    },
];

export const Overview = ({ isOpen, isSorted, isFullWidth }: TransferProps) => (
    <Transfer
        options={options}
        value={[options[0]]}
        isOpen={isOpen}
        isSorted={isSorted}
        isFullWidth={isFullWidth}
    />
);
