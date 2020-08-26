import React from 'react';
import { mockPropsCheckTest, mountTest, toBeDefinedTest } from '../../shared';
import { SelectProps } from '../../../src/components/Select/types';
import { Select } from '../../../src/components/Select/view';
import { shallow } from '../../utils';
import { useSelectChange } from '../../../src/components/Select/hooks';

const mockSelectProps: SelectProps = {
    size: `small`,
    isDisabled: true,
    blurInputOnSelect: true,
};

describe('Select', () => {
    mountTest(Select);
    toBeDefinedTest(Select, mockSelectProps);
    mockPropsCheckTest(mockSelectProps, Select);

    it(`Should return selected value when isDisabled is false`, () => {
        const onChangePassedValue = {
            value: 'Value',
            label: 'Label',
        };

        const SelectWithHook = () => {
            const { onChange, value } = useSelectChange();

            return (
                <Select
                    onChange={() => onChange?.(onChangePassedValue)}
                    value={value}
                />
            );
        };

        const select = shallow(<SelectWithHook />);

        select.find(Select).simulate('change', onChangePassedValue);
        expect(select.getElement().props.value).toEqual(onChangePassedValue);
    });

    it(`Should return undefined value when isDisabled is true`, () => {
        const onChangePassedValue = {
            value: 'Value',
            label: 'Label',
        };
        const isDisabled = true;

        const SelectWithHook = () => {
            const { onChange, value } = useSelectChange({ isDisabled });

            return (
                <Select
                    onChange={() => onChange?.(onChangePassedValue)}
                    value={value}
                />
            );
        };

        const select = shallow(<SelectWithHook />);

        select.find(Select).simulate('change', onChangePassedValue);
        expect(select.getElement().props.value).toEqual(undefined);
    });
});
