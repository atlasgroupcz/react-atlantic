import React, { useState } from 'react';
import { PaginationProps } from '../../src/components/Pagination/types';
import { Pagination } from '../../src/components/Pagination/Pagination';

const TOTAL = 300;

export const PaginationFirstDemo = () => {
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
                showArrows={true}
                separator={<div>FUCK</div>}
                left={() => <>left</>}
                right={() => <>right</>}
            />
        </>
    );
};
