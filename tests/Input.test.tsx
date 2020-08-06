import React, { FC } from 'react';
import { shallow } from 'enzyme';
import { InputBase } from '../src/components/Input/view/base';
import { InputWrapper } from '../src/components/Input/view/composed/withFix';
import { InputFixProps } from '../src/components/Input/view/composed/withFix/types';
import { InputProps } from '../src/components/Input/view/base/types';

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

const mockPropsCheckTest = <T extends {}>(
    mockProps: T,
    Component: FC<T>,
    findSelector?: string
) => {
    Object.keys(mockProps).forEach((key) => {
        it(`${key} should be ${mockProps[key]}`, () => {
            const inputBase = shallow(<Component {...mockProps} />);
            if (findSelector) {
                expect(inputBase.find(findSelector)?.props()?.[key]).toEqual(
                    mockProps[key]
                );
            } else {
                expect(inputBase.props()?.[key]).toEqual(mockProps[key]);
            }
        });
    });
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
        expect(inputWrapper.find).toBeDefined();
    });

    mockPropsCheckTest(others, InputWrapper, 'InputBase');
});
