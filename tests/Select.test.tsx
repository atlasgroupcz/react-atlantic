import React from 'react';
import { shallow } from './utils';
import { mockPropsCheckTest } from './shared';
import { SelectProps } from '../src/components/Select/Types';
import { Select } from '../src/components/Select/View';

const mockSelectProps: SelectProps = {
    size: `small`,
    isDisabled: true,
    blurInputOnSelect: true,
};

describe('Select', () => {
    it('should render Select', () => {
        const select = shallow(<Select />);
        expect(select).toBeDefined();
    });

    mockPropsCheckTest(mockSelectProps, Select);
});
