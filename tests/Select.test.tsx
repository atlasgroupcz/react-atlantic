import React from 'react';
import { InputBase } from '../src/components/Input/view/base';
import { InputWrapper } from '../src/components/Input/view/composed/withFix';
import { InputFixProps } from '../src/components/Input/view/composed/withFix/types';
import { InputProps } from '../src/components/Input/view/base/types';
import { shallow } from './utils';
import { mockPropsCheckTest } from './shared';
import { SelectProps } from '../src/components/Select/Types';
import { Select } from '../src/components/Select/View';

const mockSelectProps: SelectProps = {
    size: `small`,
    isDisabled: true,
};

describe('Select', () => {
    it('should render Select', () => {
        const select = shallow(<Select />);
        expect(select).toBeDefined();
    });

    mockPropsCheckTest(mockSelectProps, <Select />);
});
