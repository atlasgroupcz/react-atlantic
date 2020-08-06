import React from 'react';
import { shallow } from 'enzyme';
import { InputBase } from '../src/components/Input/view/base';
import { InputWrapper } from '../src/components/Input/view/composed/withFix';

describe('InputBase', () => {
    it('should render InputBase', () => {
        const inputBase = shallow(<InputBase />);
        expect(inputBase).toBeDefined();
    });
});

describe('InputWrapper', () => {
    it('should render InputWrapper', () => {
        const inputWrapper = shallow(<InputWrapper />);
        expect(inputWrapper).toBeDefined();
    });
});
