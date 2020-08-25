import React, { FC } from 'react';
import { mountWithTheme } from '../utils/mountWithTheme';

export const mountTest = (Component: FC<any>) => {
    describe(`mount and unmount ${Component?.displayName}`, () => {
        const wrapper = mountWithTheme(<Component />);
        expect(() => {
            wrapper.setProps({});
            wrapper.unmount();
        }).not.toThrow();
    });
};
