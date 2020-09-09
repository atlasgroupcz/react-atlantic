import React, { useState } from 'react';
import { PaginationProps } from '../types';
import { Pagination } from '../Pagination';

const TOTAL = 300;

export const First = () => {
    const [page, setPage] = useState<number>(1);

    const handleClick: PaginationProps['onClick'] = (e, page) => {
        setPage(page);
    };

    return (
        <>
            <Pagination
                total={TOTAL}
                page={page}
                pageSize={30}
                onClick={handleClick}
            />
        </>
    );
};
