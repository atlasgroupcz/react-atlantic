import React from 'react';
import { PaginationProps, TabsProps, Tabs } from '../../../src/components';
import { toBeDefinedTest, mountTest } from '../../shared';
import { useState } from 'react';

const mockTabsProps: TabsProps = {
    List: () => <>LIST</>,
    activeKey: '1',
};

type TestLogicHookType = (props: PaginationProps) => PaginationProps;
const useTestLogicHook: TestLogicHookType = ({ ...props }) => {
    const [page, setPage] = useState<number>(1);

    const handleClick: PaginationProps['onClick'] = (e, p) => {
        setPage(p);
    };
    return { page: page, onClick: handleClick, ...props };
};

describe('Tabs', () => {
    toBeDefinedTest(Tabs, mockTabsProps);
    mountTest(Tabs);
});
