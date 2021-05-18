import React from 'react';
import { Input, InputBase } from '../../../src/components/Input';
import {
    InputProps,
    InputDefaultProps,
} from '../../../src/components/Input/types';
import { shallow } from '../../utils';
import { mockPropsCheckTest } from '../../shared';

const mockBaseProps: InputProps = {
    value: 'value',
    isRound: true,
    size: `small`,
    isDisabled: true,
};

const mockComposedProps: InputDefaultProps = {
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

describe('Input', () => {
    const { prefix, suffix, ...others } = mockComposedProps;
    it('should render Input', () => {
        const input = shallow(<Input />);
        expect(input).toBeDefined();
    });

    mockPropsCheckTest(others, Input, InputBase);
});
