import React from 'react';
import { mockPropsCheckTest, mountTest, toBeDefinedTest } from '../../shared';
import { SelectProps } from '../../../src/components/Select/types';
import { Select } from '../../../src/components/Select/view';
import { mountWithTheme } from '../../utils';
import { wrap } from '../../../src';
import { useSelectChange } from '../../../src/components/Select/hooks';
import { default as ReactSelect } from 'react-select';

const mockSelectProps: SelectProps = {
    size: `small`,
    isDisabled: true,
    blurInputOnSelect: true,
};

describe('Select', () => {
    mountTest(Select);
    toBeDefinedTest(Select, mockSelectProps);
    mockPropsCheckTest(mockSelectProps, Select);

    it(`should view defaultValue`, async () => {
        const oldValue = {
            value: 'Value1',
            label: 'Label1',
        };

        const SelectWithHook = wrap(Select, useSelectChange);

        const select = mountWithTheme(
            <SelectWithHook defaultValue={oldValue} />
        );

        expect(select.text()).toBe(oldValue.label);
    });

    it(`should apply changes when isDisabled is false`, async () => {
        const oldValue = {
            value: 'old',
            label: 'old',
        };
        const newValue = {
            value: 'new',
            label: 'new',
        };

        const SelectWithHook = wrap(Select, useSelectChange);

        const select = mountWithTheme(
            <SelectWithHook defaultValue={oldValue} />
        );

        (select.find(ReactSelect).instance() as any).select.selectOption(
            newValue
        );

        expect(select.text()).toBe(newValue.label);
    });

    it(`should ignore changes when isDisabled is true`, async () => {
        const oldValue = {
            value: 'old',
            label: 'old',
        };
        const newValue = {
            value: 'new',
            label: 'new',
        };
        const isDisabled = true;

        const SelectWithHook = wrap(Select, useSelectChange);

        const select = mountWithTheme(
            <SelectWithHook value={oldValue} isDisabled={isDisabled} />
        );
        (select.find(ReactSelect).instance() as any).select.selectOption(
            newValue
        );

        expect(select.text()).toBe(oldValue.label);
    });
});
