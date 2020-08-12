import React, { FC, ComponentProps } from 'react';
import { shallow } from 'enzyme';

export const toBeDefinedTest = <T extends {} = {}>(
    Component: FC<T>,
    props?: ComponentProps<FC<T>>
) => {
    it(`should render ${Component?.displayName}`, () => {
        const shallowWrapper = shallow(<Component {...props} />);
        expect(shallowWrapper).toBeDefined();
    });
};
