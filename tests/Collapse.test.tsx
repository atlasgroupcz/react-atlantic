import React from 'react';
import { mount } from 'enzyme';
import { Collapse, useCollapseUnique } from '../src/components/Collapse';
import {
    CollapseProps,
    CollapseIconFactoryType,
} from '../src/components/Collapse/types';
import { wrapCurried } from '../src/utils/wrap/wrap';
import { mockPropsCheckTest, toBeDefinedTest, mountTest } from './shared/';

const mockCollapseProps: CollapseProps = {
    activeUnique: [1, 2],
    isAccordion: false,
};

describe('Collapse - view', () => {
    toBeDefinedTest(Collapse, mockCollapseProps);
    mockPropsCheckTest(mockCollapseProps, Collapse);
    mountTest(Collapse);

    it('panel should keep the className', () => {
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

    it('expandIcon should has className own-icon', () => {
        const expandIcon: CollapseIconFactoryType = (props) => (
            <div className="own-icon">
                {props.isActive ? `icon - ano ` : `icon - ne`}
            </div>
        );

        const wrapper = mount(
            <Collapse {...mockCollapseProps} expandIcon={expandIcon}>
                <Collapse.Panel
                    header="header"
                    unique="1"
                    className="custom-tmp-1"
                />
            </Collapse>
        );
        expect(wrapper.find('.own-icon').exists()).toBe(true);
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
