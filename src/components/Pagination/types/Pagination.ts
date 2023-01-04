import { FC } from 'react';
import { PaginationBaseProps } from './PaginationBase';
import { PaginationWithArrowsProps } from './PaginationWithArrows';
import { ElementProps } from '../../../types/utils';

export type PaginationProps = {
    total?: number;
    pageSize?: number;
} & Omit<ElementProps<HTMLUListElement>, 'onClick'> &
    Omit<PaginationBaseProps, 'count'> &
    Omit<PaginationWithArrowsProps, 'count'>;
export type PaginationType = FC<PaginationProps>;
