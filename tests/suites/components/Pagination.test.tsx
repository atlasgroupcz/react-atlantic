import React from 'react';
import {
    PaginationProps,
    Pagination,
    PaginationBase,
    PaginationWithArrows,
} from '../../../src/components';
import { toBeDefinedTest, mountTest } from '../../shared';
import { useState } from 'react';
import { wrap } from '../../../src/utils';
import { mountWithTheme } from '../../utils';

const mockPaginationProps: PaginationProps = {
    total: 30,
    pageSize: 10,
    page: 1,
};

type TestLogicHookType = (props: PaginationProps) => PaginationProps;
const useTestLogicHook: TestLogicHookType = ({ ...props }) => {
    const [page, setPage] = useState<number>(1);

    const handleClick: PaginationProps['onClick'] = (e, p) => {
        setPage(p);
    };
    return { page: page, onClick: handleClick, ...props };
};

//TODO!: after merge timeline please finish tests
describe('Pagination', () => {
    toBeDefinedTest(Pagination, mockPaginationProps);
    mountTest(Pagination);

    it('button should be own defined sequence', () => {
        const TestPaginationWithLogic = wrap(Pagination, useTestLogicHook);
        const wrapper = mountWithTheme(
            <TestPaginationWithLogic
                page={1}
                total={20}
                pageSize={1}
                showArrows={false}
            />
        );

        expect(wrapper.find(PaginationBase).children().length).toBe(7);
    });
    it('should has own prev and next buttons', () => {
        const TestPaginationWithLogic = wrap(Pagination, useTestLogicHook);
        const left: PaginationProps['left'] = ({ isDisabled }) => {
            return (
                <div
                    className={`${isDisabled ? 'isDisabled' : 'isActive'}`}
                ></div>
            );
        };
        const right: PaginationProps['left'] = ({ isDisabled }) => {
            return (
                <div
                    className={`${isDisabled ? 'isDisabled' : 'isActive'}`}
                ></div>
            );
        };
        const wrapper = mountWithTheme(
            <TestPaginationWithLogic
                page={1}
                total={20}
                pageSize={1}
                showArrows={true}
                left={left}
                right={right}
            />
        );

        const leftC = wrapper.find(PaginationWithArrows).childAt(0);
        const rightC = wrapper.find(PaginationWithArrows).childAt(2);

        expect(leftC.find('div').hasClass('isDisabled')).toBe(true);
        expect(rightC.find('div').hasClass('isActive')).toBe(true);
    });
    it('should as has correct structure', () => {
        const TestPaginationWithLogic = wrap(Pagination, useTestLogicHook);

        const as: PaginationProps['as'] = ({ isActive, children, onClick }) => {
            return (
                <div className={`${isActive ? 'isActive' : 'isNotActive'}`}>
                    {children}
                </div>
            );
        };

        const wrapper = mountWithTheme(
            <TestPaginationWithLogic
                page={1}
                total={20}
                pageSize={1}
                showArrows={true}
                as={as}
            />
        );

        expect(wrapper.find(PaginationBase).childAt(0).find('div').text()).toBe(
            '1'
        );
        expect(
            wrapper
                .find(PaginationBase)
                .childAt(0)
                .find('div')
                .hasClass('isActive')
        ).toBe(true);
        expect(wrapper.find(PaginationBase).childAt(1).find('div').text()).toBe(
            '2'
        );
        expect(
            wrapper
                .find(PaginationBase)
                .childAt(1)
                .find('div')
                .hasClass('isActive')
        ).toBe(false);
        expect(wrapper.find(PaginationBase).childAt(2).find('div').text()).toBe(
            '3'
        );
    });
    it('should change structure change page', () => {
        const TestPaginationWithLogic = wrap(Pagination, useTestLogicHook);

        const as: PaginationProps['as'] = ({ isActive, children, onClick }) => {
            return (
                <div
                    onClick={onClick}
                    className={`${isActive ? 'isActive' : 'isNotActive'}`}
                >
                    {children}
                </div>
            );
        };
        const wrapper = mountWithTheme<typeof TestPaginationWithLogic>(
            <TestPaginationWithLogic total={20} pageSize={1} as={as} />
        );

        expect(wrapper.find(Pagination).props().page).toBe(1);
        expect(wrapper.find(PaginationBase).childAt(0).find('div').text()).toBe(
            '1'
        );
        expect(
            wrapper
                .find(PaginationBase)
                .childAt(0)
                .find('div')
                .hasClass('isActive')
        ).toBe(true);

        wrapper.find(PaginationBase).childAt(4).find('div').simulate('click');
        expect(wrapper.find(Pagination).props().page).toBe(5);
        expect(
            wrapper
                .find(PaginationBase)
                .childAt(0)
                .find('div')
                .hasClass('isActive')
        ).toBe(false);
        expect(
            wrapper
                .find(PaginationBase)
                .childAt(4)
                .find('div')
                .hasClass('isActive')
        ).toBe(true);
    });
});
