import React from 'react';
import { Badge } from '../../../src/components/Badge';
import { shallow } from '../../utils';

describe('Badge', () => {
    it(`Should render`, () => {
        const badge = shallow<typeof Badge>(<Badge />);
        expect(badge).toBeDefined();
    });
});
