import { PaginationBaseProps } from '../view';

type GetPaginationCount = (args: GetPaginationCountArgs) => number;
type GetPaginationCountArgs = Required<
    Pick<PaginationBaseProps, 'pageSize' | 'total'>
>;

export const getPaginationCount: GetPaginationCount = ({ pageSize, total }) => {
    return total ? Math.ceil(total / pageSize) : 0;
};
