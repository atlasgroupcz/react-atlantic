import React, { useState, FC } from 'react';
import { PaginationProps, PaginationComponentProps } from '../types';
import { Pagination } from '../Pagination';

const TOTAL = 300;

export const First = () => {
    const [page, setPage] = useState<number>(1);

    const handleClick: PaginationProps['onClick'] = (e, page) => {
        setPage(page);
    };

    interface xI extends PaginationComponentProps {}
    const x: FC<xI> = (props) => {
        console.log(props);
    };

    return (
        <>
            <Pagination
                total={TOTAL}
                page={page}
                pageSize={30}
                onClick={handleClick}
                showArrows={false}
                separator={<div>FUCK</div>}
            />
        </>
    );
};
