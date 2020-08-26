import React from 'react';
import { Button } from '../../../src/components/Button';
import { shallow } from '../../utils';

describe('Button', () => {
    it('should render', () => {
        const button = shallow(<Button />);
        expect(button).toBeDefined();
    });
});
