import React, { FC, useMemo, ReactText, ReactNode } from 'react';
import { StyledPagination } from './style';
import { structureArray } from '../../utils/structureArray';
import { PaginationButton } from '../Button';
import { PaginationSeparator } from '../../Separator';

export type PaginationProps<
    S extends Element = Element,
    T extends PaginationComponentProps<S> = PaginationComponentProps
> = {
    total?: number;
    page?: number;
    pageSize?: number;
    as?: FC<T>;
    separator?: ReactNode;
    onClick?: (e: React.MouseEvent<S, MouseEvent>, page: number) => void;
};

export type PaginationComponentProps<T extends Element = Element> = {
    onClick?: (e: React.MouseEvent<T, MouseEvent>) => void;
    children?: ReactText;
    isActive?: boolean;
};
export type PaginationType = FC<PaginationProps>;

export const Pagination: PaginationType = ({
    page = 0,
    total = 0,
    pageSize = 30,
    onClick,
    as = PaginationButton,
    separator = <PaginationSeparator />,
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
                    const pageNumber = key;
                    const onClickForChild = (
                        e: React.MouseEvent<Element, MouseEvent>
                    ) => onClick?.(e, pageNumber);
                    const Component = as;
                    return (
                        <li key={key}>
                            <Component
                                onClick={onClickForChild}
                                isActive={page === pageNumber}
                            >
                                {pageNumber}
                            </Component>
                        </li>
                    );
                }
            })}
        </StyledPagination>
    );
};
