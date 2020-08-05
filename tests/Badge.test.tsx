import { shallow } from 'enzyme';
import React from 'react';
import { Badge } from '../src/components/Badge';
import expect from 'expect';

describe('Badge', () => {
    it(`Should render`, () => {
        const badge = shallow(<Badge />);
        expect(badge).toBeDefined();
    });
});
