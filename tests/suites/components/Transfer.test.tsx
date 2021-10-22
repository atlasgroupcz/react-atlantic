import React, { FC } from 'react';
import {
    Transfer as TransferView,
    useTransfer,
} from '../../../src/components/Transfer';
import { wrap } from '../../../src/utils/wrap/wrap';
import { mockPropsCheckTest, mountTest, toBeDefinedTest } from '../../shared';

const options = [
    { label: 'Label 1', value: 'one' },
    { label: <span>Label 2</span>, value: 'two' },
];

const mockTransferProps = {
    options,
    defaultValue: [options[1]],
};

describe('Transfer', () => {
    const Transfer = wrap(TransferView, useTransfer);

    mountTest(Transfer);
    toBeDefinedTest(Transfer, mockTransferProps);
    mockPropsCheckTest(mockTransferProps, Transfer as FC);
});
