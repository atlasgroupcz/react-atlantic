import React, { FC } from 'react';
import { mount } from 'enzyme';

export const mountTest = (Component: FC<any>) => {
    describe(`mount and unmount ${Component?.displayName}`, () => {
        const wrapper = mount(<Component />);
        expect(() => {
            wrapper.setProps({});
            wrapper.unmount();
        }).not.toThrow();
    });
};
