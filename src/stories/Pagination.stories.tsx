import React from 'react';
import { Pagination } from '..';
import { crossOut, disable } from './disableOnEvent';

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
        page={1}
        pageSize={30}
        separatorLeft={<div>{'<'}</div>}
        separatorRight={<div>{'>'}</div>}
        showArrows
        total={300}
    />
);
