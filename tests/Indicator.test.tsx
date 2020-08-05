import { shallow } from 'enzyme';
import React from 'react';
import { Indicator } from '../src/components/Indicator';
import expect from 'expect';

describe('Indicator', () => {
    it(`Should render`, () => {
        const indicator = shallow(<Indicator />);
        expect(indicator).toBeDefined();
    });
});
