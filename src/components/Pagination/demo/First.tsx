import React, { useState } from 'react';
import { PaginationBase } from '../view';
import { PaginationWithArrows } from '../view/withArrows';
import { PaginationProps } from '../types';

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
