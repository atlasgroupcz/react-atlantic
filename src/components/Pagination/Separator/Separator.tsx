import React, { FC } from 'react';
import { StyledPaginationSeparator } from './style';

export interface PaginationSeparatorProps {}
export type PaginationSeparatorType = FC<PaginationSeparatorProps>;

export const PaginationSeparator: PaginationSeparatorType = () => {
    return <StyledPaginationSeparator>•••</StyledPaginationSeparator>;
};
