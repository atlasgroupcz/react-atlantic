import { PaginationComponentProps } from './PaginationComponent';
import { PaginationBaseProps } from './PaginationBase';
import { FC } from 'react';

export type PaginationArrowComponentProps = Omit<
    PaginationComponentProps,
    'isActive'
> & { isDisabled: boolean };
export type PaginationWithArrowsProps = {
    showArrows?: boolean;
    left?: FC<PaginationArrowComponentProps>;
    right?: FC<PaginationArrowComponentProps>;
} & PaginationBaseProps;
