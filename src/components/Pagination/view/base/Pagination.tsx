import React, { FC } from 'react';
import { StyledPagination } from './style';

export interface PaginationProps {}
export type PaginationType = FC<PaginationProps>;

export const Pagination: PaginationType = () => {
    return <StyledPagination>Pagination Baby</StyledPagination>;
};
