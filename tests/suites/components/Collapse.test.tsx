import React from 'react';
import { mockPropsCheckTest, toBeDefinedTest, mountTest } from '../../shared';
import { mountWithTheme } from '../../utils';
import {
    Collapse,
    CollapseProps,
    CollapseIconFactoryType,
    useCollapseUnique,
    wrap,
} from '../../../src';
import { StyledPanelHeader } from '../../../src/components/Collapse/Panel/styles';

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
        const wrapper = mountWithTheme(
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

        const wrapper = mountWithTheme(
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
        const expandIcon: CollapseIconFactoryType = () => null;

        const wrapper = mountWithTheme(
            <Collapse {...mockCollapseProps} expandIcon={expandIcon}>
                <Collapse.Panel
                    header="header"
                    unique="1"
                    className={`${firstPanelClassName}`}
                />
            </Collapse>
        );

        const panel = wrapper.find(StyledPanelHeader).at(0);
        const panelChildrenLength = panel.children().length;

        const expectedChildrenLength = 1;
        expect(panelChildrenLength).toEqual(expectedChildrenLength);
    });
});

describe('Collapse - useCollapseUnique', () => {
    const firstPanelClassName = 'custom-tmp-1';
    const secondPanelClassName = 'custom-tmp-2';

    const children = (
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

    const TestCollapse = wrap(Collapse, useCollapseUnique);

    toBeDefinedTest(TestCollapse);
    mountTest(TestCollapse);

    it('should be expanded as collapse logic', () => {
        const expectedActiveUnique = ['1', '2'];
        const wrapper = mountWithTheme(<TestCollapse>{children}</TestCollapse>);
        expect(wrapper.find(Collapse).exists()).toBe(true);
        wrapper.find(Collapse).find(StyledPanelHeader).at(0).simulate('click');
        wrapper.find(Collapse).find(StyledPanelHeader).at(1).simulate('click');

        expect(wrapper.find(Collapse).props().activeUnique).toEqual(
            expectedActiveUnique
        );
    });

    it('should be expanded as accordion logic', () => {
        const expectedActiveUnique = '2';
        const wrapper = mountWithTheme(
            <TestCollapse isAccordion>{children}</TestCollapse>
        );
        expect(wrapper.find(Collapse).exists()).toBe(true);
        wrapper.find(Collapse).find(StyledPanelHeader).at(0).simulate('click');
        wrapper.find(Collapse).find(StyledPanelHeader).at(1).simulate('click');

        expect(wrapper.find(Collapse).props().activeUnique).toEqual(
            expectedActiveUnique
        );
    });

    it('hoc should be affected as not accordion logic', () => {
        const expectedActiveUnique = '2';
        const wrapper = mountWithTheme(
            <TestCollapse isAccordion={false}>{children}</TestCollapse>
        );
        expect(wrapper.find(Collapse).exists()).toBe(true);
        wrapper.find(Collapse).find(StyledPanelHeader).at(0).simulate('click');
        wrapper.find(Collapse).find(StyledPanelHeader).at(1).simulate('click');

        expect(wrapper.find(Collapse).props().activeUnique).not.toEqual(
            expectedActiveUnique
        );
    });
});
