import React from 'react';
import { shallow } from './utils';
import { Icon } from '../src';
import { IconName } from '../src/components/Icon/view';

describe('Icon', () => {
    const iconName: IconName = 'arrowDoubleDown';
    it(`should render`, () => {
        const icon = shallow<typeof Icon>(<Icon name={iconName} />);
        expect(icon).toBeDefined();
    });

    it(`should render with corrent name`, () => {
        const icon = shallow<typeof Icon>(<Icon name={iconName} />);
        expect(icon.props().name).toBe(iconName);
    });
});
