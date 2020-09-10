import React from 'react';
import { PaginationProps, Pagination } from '../../../src/components';
import { toBeDefinedTest } from '../../shared';
import { useState } from 'react';
import { wrap } from '../../../src/utils';

const mockPaginationProps: PaginationProps = {
    total: 30,
    pageSize: 10,
    page: 1,
};

//TODO!: after merge timeline please finish tests
describe('Pagination', () => {
    toBeDefinedTest(Pagination, mockPaginationProps);
    // mockPropsCheckTest(mockPaginationProps, Pagination);
    // mountTest(Pagination);

    it('button should be own defined sequence', () => {});
    it('should has own prev and next buttons', () => {});
    it('should change has correct structure', () => {});
    it('should change structure change page', () => {});
});

type TestLogicHookType = (props: PaginationProps) => PaginationProps;
const useTestLogicHook: TestLogicHookType = ({ ...props }) => {
    const [page, setPage] = useState<number>(1);

    const handleClick: PaginationProps['onClick'] = (e, p) => {
        setPage(p);
    };
    return { page, onClick: handleClick, ...props };
};

const TestPaginationWithLogic = wrap(Pagination, useTestLogicHook);
