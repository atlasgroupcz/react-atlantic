import { PaginationComponentProps } from '../../../types';
import { FC, ReactNode } from 'react';

export type PaginationBaseProps<
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

export type PaginationBaseType = FC<PaginationBaseProps>;
