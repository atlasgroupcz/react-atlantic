import React, { FC } from 'react';
import { PaginationBase } from '../base/Pagination';

export interface PaginationWithArrowsProps {}
export type PaginationWithArrowsType = FC<PaginationWithArrowsProps>;

export const PaginationWithArrows: PaginationWithArrowsType = () => {
    return (
        <>
            <li>FUCK ONE</li>
            <PaginationBase />
            <li>FUCK OTHER SITE</li>
        </>
    );
};
