import { FC } from 'react';
import { PaginationBaseProps } from './PaginationBase';
import { PaginationWithArrowsProps } from './PaginationWithArrows';
import { CommonHTMLProps } from '../../../types';

export type PaginationProps = {
    total?: number;
    pageSize?: number;
} & CommonHTMLProps<HTMLUListElement> &
    Omit<PaginationBaseProps, 'count'> &
    Omit<PaginationWithArrowsProps, 'count'>;
export type PaginationType = FC<PaginationProps>;
