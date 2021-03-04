import React, { FC } from 'react';
import { mockPropsCheckTest, mountTest, toBeDefinedTest } from '../../shared';
import { SelectProps } from '../../../src';
import { Select } from '../../../src';
import { mountWithTheme } from '../../utils';
import { wrap } from '../../../src';
import { useSelect } from '../../../src';

const mockSelectProps: SelectProps = {
    size: `small`,
    isDisabled: true,
};

describe('Select', () => {
    mountTest(Select);
    toBeDefinedTest(Select, mockSelectProps);
    mockPropsCheckTest(mockSelectProps, Select as FC);

    it(`should view defaultValue`, async () => {
        const oldValue = {
            value: 'Value1',
            label: 'Label1',
        };

        const SelectWithHook = wrap(Select, useSelect);

        const select = mountWithTheme(
            <SelectWithHook defaultValue={oldValue} />
        );

        expect(select.text()).toBe(oldValue.label);
    });
});
