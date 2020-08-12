import React from 'react';
import { mockPropsCheckTest, mountTest, toBeDefinedTest } from './shared';
import { SelectProps } from '../src/components/Select/Types';
import { Select } from '../src/components/Select/View';

const mockSelectProps: SelectProps = {
    size: `small`,
    isDisabled: true,
    blurInputOnSelect: true,
};

describe('Select', () => {
    mountTest(Select);
    toBeDefinedTest(Select, mockSelectProps);
    mockPropsCheckTest(mockSelectProps, Select);
});
