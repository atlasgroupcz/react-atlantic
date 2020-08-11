import React, { FC, ComponentProps } from 'react';
import { mount, shallow } from 'enzyme';
import { Collapse, useCollapseUnique } from '../src/components/Collapse';
import { CollapseProps } from '../src/components/Collapse/types';
import { wrapCurried } from '../src/utils/wrap/wrap';
import { mockPropsCheckTest } from './shared/';

const mountTest = (Component: FC<any>) => {
    describe(`mount and unmount ${Component?.displayName}`, () => {
        const wrapper = mount(<Component />);
        expect(() => {
            wrapper.setProps({});
            wrapper.unmount();
        }).not.toThrow();
    });
};

const toBeDefinedTest = <T extends {} = {}>(
    Component: FC<T>,
    props?: ComponentProps<FC<T>>
) => {
    it(`should render ${Component?.displayName}`, () => {
        const shallowWrapper = shallow(<Component {...props} />);
        expect(shallowWrapper).toBeDefined();
    });
};

const mockCollapseProps: CollapseProps = {
    activeUnique: [1, 2],
    isAccordion: false,
};

describe('Collapse - view', () => {
    toBeDefinedTest(Collapse, mockCollapseProps);
    mockPropsCheckTest(mockCollapseProps, Collapse);
    mountTest(Collapse);

    it('Panel should keep the className - View', () => {
        const wrapper = mount(
            <Collapse {...mockCollapseProps}>
                <Collapse.Panel
                    header="header"
                    unique="1"
                    className="custom-tmp-1"
                />
            </Collapse>
        );
        expect(wrapper.find('.custom-tmp-1').exists()).toBe(true);
    });
});

describe('Collapse - useCollapseUnique', () => {
    const firstPanelClassName = 'custom-tmp-1';
    const secondPanelClassName = 'custom-tmp-2';

    const CollapseChildren = (
        <>
            <Collapse.Panel
                header="header"
                unique="1"
                className={`${firstPanelClassName}`}
            />
            <Collapse.Panel
                header="header"
                unique="2"
                className={`${secondPanelClassName}`}
            />
        </>
    );

    const HoCWithoutAccordion = wrapCurried(Collapse)(
        useCollapseUnique,
        CollapseChildren
    );

    const HoCWithAccordion = wrapCurried(Collapse)(
        [useCollapseUnique, { isAccordion: true }],
        CollapseChildren
    );

    toBeDefinedTest(HoCWithoutAccordion);
    mountTest(HoCWithoutAccordion);

    const firstPanelSelector = `.${firstPanelClassName} div div`;
    const secondPanelSelector = `.${secondPanelClassName} div div`;

    it('should be expanded as collapse logic', () => {
        const expectedActiveUnique = ['1', '2'];
        const wrapper = mount(<HoCWithoutAccordion />);
        expect(wrapper.find(Collapse).exists()).toBe(true);
        wrapper.find(Collapse).find(firstPanelSelector).simulate('click');
        wrapper.find(Collapse).find(secondPanelSelector).simulate('click');

        expect(wrapper.find(Collapse).props().activeUnique).toEqual(
            expectedActiveUnique
        );
    });

    it('should be expanded as accordion logic', () => {
        const expectedActiveUnique = '2';
        const wrapper = mount(<HoCWithAccordion />);
        expect(wrapper.find(Collapse).exists()).toBe(true);
        wrapper.find(Collapse).find(firstPanelSelector).simulate('click');
        wrapper.find(Collapse).find(secondPanelSelector).simulate('click');

        expect(wrapper.find(Collapse).props().activeUnique).toEqual(
            expectedActiveUnique
        );
    });

    it('hoc should be affected as not accordion logic', () => {
        const expectedActiveUnique = '2';
        const wrapper = mount(<HoCWithAccordion isAccordion={false} />);
        expect(wrapper.find(Collapse).exists()).toBe(true);
        wrapper.find(Collapse).find(firstPanelSelector).simulate('click');
        wrapper.find(Collapse).find(secondPanelSelector).simulate('click');

        expect(wrapper.find(Collapse).props().activeUnique).not.toEqual(
            expectedActiveUnique
        );
    });
});
