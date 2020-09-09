import { PaginationProps } from '../types';

type GetPaginationCount = (args: GetPaginationCountArgs) => number;
type GetPaginationCountArgs = Required<
    Pick<PaginationProps, 'pageSize' | 'total'>
>;

export const getPaginationCount: GetPaginationCount = ({ pageSize, total }) => {
    return Math.ceil(total / pageSize);
};
