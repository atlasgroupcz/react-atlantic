import React, { useState } from 'react';
import { Pagination, PaginationProps } from '../../../src';

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
                separatorLeft={<div>FUCK</div>}
                separatorRight={<div>FUCK</div>}
                left={() => <>left</>}
                right={() => <>right</>}
            />
        </>
    );
};
