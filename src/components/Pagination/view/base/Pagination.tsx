import React, { FC, useMemo, ReactText, ReactNode } from 'react';
import { StyledPagination } from './style';
import { Button } from '../../../Button';
import { structureArray } from '../../utils/structureArray';

export type PaginationProps<
    T extends PaginationComponentProps = PaginationComponentProps
> = {
    total?: number;
    page?: number;
    pageSize?: number;
    as?: FC<T>;
    separator?: ReactNode;
    onClick?: (e: React.MouseEvent<any, MouseEvent>, page: number) => void;
};

//t
type PaginationComponentProps = {
    onClick?: (e: React.MouseEvent<any, MouseEvent>) => void;
    children?: ReactText;
};
export type PaginationType = FC<PaginationProps>;

export const Pagination: PaginationType = ({
    page = 0,
    total = 0,
    pageSize = 30,
    onClick,
    as = Button,
    separator = <>FUCK</>,
}) => {
    const count = useMemo(() => (total ? Math.ceil(total / pageSize) : 0), [
        total,
        pageSize,
    ]);

    const strucArr = useMemo(() => structureArray({ count, page }), [
        count,
        page,
    ]);

    return (
        <StyledPagination>
            {strucArr.map((key, index) => {
                if (key === -1) {
                    return <li key={key - index}>{separator}</li>;
                } else {
                    const pageNumber = index + 1;
                    const onClickForChild = (page: number) => (
                        e: React.MouseEvent<HTMLElement, MouseEvent>
                    ) => onClick?.(e, pageNumber);
                    const Component = as;
                    return (
                        <li key={key}>
                            <Component onClick={onClickForChild(pageNumber)}>
                                {pageNumber}
                            </Component>
                        </li>
                    );
                }
            })}
        </StyledPagination>
    );
};
