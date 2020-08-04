import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '../src';

describe('Button', () => {
    it('should render', () => {
        const button = shallow(<Button />);
        expect(button).toBeDefined();
    });
});
