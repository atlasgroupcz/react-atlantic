import { ReactText, FC } from 'react';
import { PaginationBaseProps } from '../view/base/types';
import { PaginationWithArrowsProps } from '../view/withArrows/types';

export type PaginationComponentProps<T extends Element = Element> = {
    onClick?: (e: React.MouseEvent<T, MouseEvent>) => void;
    children?: ReactText;
    isActive?: boolean;
};

export type PaginationProps = {
    total?: number;
    pageSize?: number;
} & Omit<PaginationBaseProps, 'count'> &
    Omit<PaginationWithArrowsProps, 'count'>;
export type PaginationType = FC<PaginationProps>;
