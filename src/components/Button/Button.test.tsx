import React from 'react';
import { shallow } from 'enzyme';
import { Button } from './Button';

describe('Button', () => {
  it('should render', () => {
    const button = shallow(<Button />);
    expect(button).toBeDefined();
  });
});
