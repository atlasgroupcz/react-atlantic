import React, { FC } from 'react';
import { Pagination as PaginationBase } from '../base/Pagination';

export interface PaginationWithArrowsProps {}
export type PaginationWithArrowsType = FC<PaginationWithArrowsProps>;

export const PaginationWithArrows: PaginationWithArrowsType = () => {
    return (
        <>
            <div>FUCK ONE</div>
            <PaginationBase />
            <div>FUCK OTHER SITE</div>
        </>
    );
};
