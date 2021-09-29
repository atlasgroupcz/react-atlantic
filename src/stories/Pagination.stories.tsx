import React, { useCallback } from 'react';
import { wrap } from '@atlasgroup/react-wrap';
import { Pagination as PaginationView, PaginationProps } from '..';
import { crossOut, disable } from './disableOnEvent';

const usePagination = ({
    onClick,
    ...props
}: Partial<PaginationProps>): PaginationProps => {
    const [page, setPage] = React.useState(1);

    const handleChange = useCallback<NonNullable<PaginationProps['onClick']>>(
        (e, page) => {
            setPage(page);
            onClick && onClick(e, page);
        },
        [onClick]
    );

    return {
        page,
        onClick: handleChange,
        ...props,
    };
};

const Pagination = wrap(PaginationView, usePagination);

export default {
    title: 'Pagination',
    component: Pagination,
    argTypes: {
        total: crossOut,
        pageSize: crossOut,
        ref: crossOut,
        onChange: disable,
        as: crossOut,
        page: crossOut,
        separatorLeft: crossOut,
        separatorRight: crossOut,
        right: crossOut,
        left: crossOut,
        showArrows: crossOut,
    },
};

export const Overview = () => (
    <Pagination
        pageSize={30}
        separatorLeft={<div>{'<'}</div>}
        separatorRight={<div>{'>'}</div>}
        showArrows
    />
);
