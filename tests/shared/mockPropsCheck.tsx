import React, { FC } from 'react';
import { shallow } from 'enzyme';

export const mockPropsCheckTest = <T extends {}>(
    mockProps: T,
    Component: FC<T>,
    subComponent?: FC<T>
) => {
    (Object.keys(mockProps) as (keyof T)[]).forEach((key) => {
        it(`${key} should be ${mockProps[key]}`, () => {
            const shallowWrapper = shallow(<Component {...mockProps} />);
            if (subComponent) {
                expect(
                    shallowWrapper.find(subComponent)?.props()?.[key]
                ).toEqual(mockProps[key]);
            } else {
                expect(shallowWrapper.props()?.[key]).toEqual(mockProps[key]);
            }
        });
    });
};
