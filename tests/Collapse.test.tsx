import React, { FC } from 'react';
import { mount, shallow } from 'enzyme';
import { Collapse, useCollapseUnique } from '../src/components/Collapse';
import { CollapseProps } from '../src/components/Collapse/types';
import { wrapCurried } from '../src/utils/wrap/wrap';

const mockPropsCheckTest = <T extends {}>(
    mockProps: T,
    Component: FC<T>,
    subComponent?: FC<T>
) => {
    (Object.keys(mockProps) as (keyof T)[]).forEach((key) => {
        it(`${key} should be ${mockProps[key]}`, () => {
            const shallowWrapper = shallow(<Component {...mockProps} />);
            if (subComponent) {
                expect(
                    shallowWrapper.find(subComponent)?.props()?.[key]
                ).toEqual(mockProps[key]);
            } else {
                expect(shallowWrapper.props()?.[key]).toEqual(mockProps[key]);
            }
        });
    });
};

const mountTest = (Component: FC<any>) => {
    describe(`mount and unmount`, () => {
        const wrapper = mount(<Component />);
        expect(() => {
            wrapper.setProps({});
            wrapper.unmount();
        }).not.toThrow();
    });
};

const mockCollapseProps: CollapseProps = {
    activeUnique: [1, 2],
    isAccordion: false,
};

describe('Collapse - view', () => {
    it('should render Collapse', () => {
        const inputBase = shallow(<Collapse {...mockCollapseProps} />);
        expect(inputBase).toBeDefined();
    });
    mockPropsCheckTest(mockCollapseProps, Collapse);
    mountTest(Collapse);

    it('Panel should keep the className', () => {
        const wrapper = mount(
            <Collapse {...mockCollapseProps}>
                <Collapse.Panel
                    header="header"
                    unique="1"
                    className="custom-tmp-xd"
                />
            </Collapse>
        );

        expect(wrapper.find('.custom-tmp-xd').exists()).toBe(true);
    });
});

describe('Collapse - hook', () => {
    const HocCollapse = wrapCurried(Collapse)(
        useCollapseUnique,
        <Collapse.Panel header="header" unique="1" className="custom-tmp-xd" />
    );

    it('should render Collapse', () => {
        const inputBase = shallow(<HocCollapse />);
        expect(inputBase).toBeDefined();
    });
});
