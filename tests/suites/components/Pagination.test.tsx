import { PaginationProps, Pagination } from '../../../src/components';
import { toBeDefinedTest } from '../../shared';

const mockPaginationProps: PaginationProps = {
    total: 30,
    pageSize: 10,
    page: 1,
};

describe('Pagination', () => {
    toBeDefinedTest(Pagination, mockPaginationProps);
    // mockPropsCheckTest(mockPaginationProps, Pagination);
    // mountTest(Pagination);
});
