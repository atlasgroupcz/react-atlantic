import React from 'react';
import { Indicator } from '../../../src/components/Indicator';
import { shallow } from '../../utils';

describe('Indicator', () => {
    it(`Should render`, () => {
        const indicator = shallow(<Indicator />);
        expect(indicator).toBeDefined();
    });
});
