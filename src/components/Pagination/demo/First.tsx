import React, { useState } from 'react';
import { Pagination, PaginationProps } from '../view';
import { Button } from '../../Button';

const TOTAL = 300;

export const First = () => {
    const [page, setPage] = useState<number>(0);

    const handleClick: PaginationProps['onClick'] = (e, page) => {
        setPage(page);
    };

    return (
        <Pagination
            total={TOTAL}
            page={page}
            pageSize={30}
            onClick={handleClick}
            as={Button}
        />
    );
};
