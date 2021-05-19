import React from 'react';
import {
    Input,
    InputBase,
    InputFloatingLabel,
    StyledInputFloatingLabelInput,
} from '../../../src/components/Input';
import {
    InputProps,
    InputDefaultProps,
} from '../../../src/components/Input/types';
import { mountWithTheme, shallow } from '../../utils';
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

describe('InputFloatingLabel ', () => {
    it('should render with correct placeholder', () => {
        const wrapper = mountWithTheme(<InputFloatingLabel />);
        const input = wrapper.find(StyledInputFloatingLabelInput).getDOMNode();
        const placeholder = input.getAttribute(`placeholder`);
        expect(typeof placeholder).toBe(`string`);
    });

    mockPropsCheckTest(mockBaseProps, InputFloatingLabel);
});
