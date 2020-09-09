import { FC } from 'react';
import { PaginationBaseProps } from '../../base/types';
import { PaginationComponentProps } from '../../../types';

export type PaginationWithArrowsProps = {
    showArrows?: boolean;
    left?: FC<
        Omit<PaginationComponentProps, 'isActive'> & { isDisabled: boolean }
    >;
    right?: FC<
        Omit<PaginationComponentProps, 'isActive'> & { isDisabled: boolean }
    >;
} & PaginationBaseProps;

export type PaginationWithArrowsType = FC<PaginationWithArrowsProps>;
