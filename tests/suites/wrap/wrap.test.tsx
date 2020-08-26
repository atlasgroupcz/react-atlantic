import React from 'react';
import { wrap } from '../../../src/utils';
import {
    MockComponent,
    useMockComponent,
    MOCK_STRING,
    MockComponentWithChildren,
} from './mocks';
import { mount, shallow } from '../../utils';

describe('wrap', () => {
    it('should be defined', () => {
        expect(wrap).toBeDefined();
    });

    it('should return an valid element', () => {
        const Component = wrap(MockComponent, useMockComponent);
        expect(Component).toBeDefined();
        expect(<Component />).toBeDefined();
        expect(mount(<Component />)).toBeDefined();
    });

    it('should return an element with valid props', () => {
        const Component = wrap(MockComponent, useMockComponent);
        expect(
            mount<typeof Component>(<Component isMock />).props().isMock
        ).toBe(true);
    });

    it('should return an element with changing props', () => {
        const Component = wrap(MockComponent, useMockComponent);
        const mountedComponent = mount<typeof Component>(<Component />);

        mountedComponent.setProps({ isMock: true });
        expect(mountedComponent.props().isMock).toBe(true);
    });

    it('should render a correct element', () => {
        const Component = wrap(MockComponent, useMockComponent);

        const renderedComponent = shallow<typeof MockComponent>(
            <Component isMock />
        );
        expect(renderedComponent.props().mockString).toBe(MOCK_STRING);
    });

    it('should render an element with children and props', () => {
        const mockChildren = 'xxxxx';
        const Component = wrap(MockComponentWithChildren, useMockComponent);

        const renderedComponent = mount<typeof MockComponentWithChildren>(
            <Component isMock>{mockChildren}</Component>
        );
        expect(renderedComponent.contains(mockChildren)).toBe(true);
        expect(renderedComponent.contains(MOCK_STRING)).toBe(true);
    });
});
