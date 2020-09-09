import React, { useState } from 'react';
import { Pagination as PaginationBase, PaginationProps } from '../view';
import { PaginationWithArrows } from '../view/withArrows';

const TOTAL = 300;

export const First = () => {
    const [page, setPage] = useState<number>(1);

    const handleClick: PaginationProps['onClick'] = (e, page) => {
        setPage(page);
    };

    return (
        <>
            <PaginationWithArrows />
            <br />
            <PaginationBase
                total={TOTAL}
                page={page}
                pageSize={30}
                onClick={handleClick}
            />
        </>
    );
};
