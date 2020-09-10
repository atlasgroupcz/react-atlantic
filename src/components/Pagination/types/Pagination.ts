import { FC } from 'react';
import { PaginationBaseProps } from './PaginationBase';
import { PaginationWithArrowsProps } from './PaginationWithArrows';

export type PaginationProps = {
    total?: number;
    pageSize?: number;
} & Omit<PaginationBaseProps, 'count'> &
    Omit<PaginationWithArrowsProps, 'count'>;
export type PaginationType = FC<PaginationProps>;
