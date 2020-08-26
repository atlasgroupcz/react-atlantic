import React from 'react';
import { wrapCurried_DEPRECATED } from '../../../src/utils/wrapCurried_DEPRECATED';
import { mockPropsCheckTest, toBeDefinedTest, mountTest } from '../../shared';

import { mount } from '../../utils';
import {
    Collapse,
    CollapseProps,
    CollapseIconFactoryType,
    useCollapseUnique,
} from '../../../src/components/Collapse';

const mockCollapseProps: CollapseProps = {
    activeUnique: [1, 2],
    isAccordion: false,
};

describe('Collapse - view', () => {
    toBeDefinedTest(Collapse, mockCollapseProps);
    mockPropsCheckTest(mockCollapseProps, Collapse);
    mountTest(Collapse);

    const firstPanelClassName = 'custom-tmp-1';

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
        expect(wrapper.find(`.${firstPanelClassName}`).exists()).toBe(true);
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
                    className={`${firstPanelClassName}`}
                />
            </Collapse>
        );
        expect(wrapper.find('.own-icon').exists()).toBe(true);
    });

    it(`it should not have icon`, () => {
        const expandIcon: CollapseIconFactoryType = (props) => null;

        const wrapper = mount(
            <Collapse {...mockCollapseProps} expandIcon={expandIcon}>
                <Collapse.Panel
                    header="header"
                    unique="1"
                    className={`${firstPanelClassName}`}
                />
            </Collapse>
        );

        const panel = wrapper.find(`.${firstPanelClassName} div div`).at(0);
        const panelChildrenLength = panel.children().length;

        const expectedChildrenLength = 1;
        expect(panelChildrenLength).toEqual(expectedChildrenLength);
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

    const HoCWithoutAccordion = wrapCurried_DEPRECATED(Collapse)(
        useCollapseUnique,
        CollapseChildren
    );

    const HoCWithAccordion = wrapCurried_DEPRECATED(Collapse)(
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
