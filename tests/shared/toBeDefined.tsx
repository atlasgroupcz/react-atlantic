import React, { FC } from 'react';
import { shallowWithTheme } from '../utils/shallowWithTheme';

//TODO: fix type :(
export const toBeDefinedTest = <F extends FC<any>>(
    Component: F,
    props?: any
) => {
    it(`should render ${Component?.displayName}`, () => {
        const shallowWrapper = shallowWithTheme(<Component {...props} />);
        expect(shallowWrapper).toBeDefined();
    });
};
