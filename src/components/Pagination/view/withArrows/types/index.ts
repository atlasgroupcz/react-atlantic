import { FC } from 'react';
import { PaginationBaseProps } from '../../base/types';
import { PaginationComponentProps } from '../../../types';

export type PaginationArrowComponentProps = Omit<
    PaginationComponentProps,
    'isActive'
> & { isDisabled: boolean };
export type PaginationWithArrowsProps = {
    showArrows?: boolean;
    left?: FC<PaginationArrowComponentProps>;
    right?: FC<PaginationArrowComponentProps>;
} & PaginationBaseProps;

export type PaginationWithArrowsType = FC<PaginationWithArrowsProps>;
