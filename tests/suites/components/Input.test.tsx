import React from 'react';
import { InputBase } from '../../../src/components/Input/views/base';
import { InputWrapper } from '../../../src/components/Input/views/composed/withFix';
import { InputFixProps } from '../../../src/components/Input/views/composed/withFix/types';
import { InputProps } from '../../../src/components/Input/views/base/types';
import { shallow } from '../../utils';
import { mockPropsCheckTest } from '../../shared';

const mockBaseProps: InputProps = {
    value: 'value',
    isRound: true,
    size: `small`,
    isDisabled: true,
};

const mockComposedProps: InputFixProps = {
    ...mockBaseProps,
    prefix: <div>one</div>,
    suffix: <div>two</div>,
};

describe('InputBase', () => {
    it('should render InputBase', () => {
        const inputBase = shallow(<InputBase />);
        expect(inputBase).toBeDefined();
    });

    mockPropsCheckTest(mockBaseProps, InputBase);
});

describe('InputWrapper', () => {
    const { prefix, suffix, ...others } = mockComposedProps;
    it('should render InputWrapper', () => {
        const inputWrapper = shallow(<InputWrapper />);
        expect(inputWrapper).toBeDefined();
    });

    mockPropsCheckTest(others, InputWrapper, InputBase);
});
