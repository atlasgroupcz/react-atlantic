import React from 'react';
import { TabsProps, Tabs } from '../../../src/components';
import { mountTest, toBeDefinedTest } from '../../shared';

export const TmpList = () => {
    return <>TMP LIST</>;
};

const mockTabsProps: TabsProps = {
    activeKey: '1',
    List: TmpList,
};

describe('Tabs', () => {
    toBeDefinedTest(Tabs, mockTabsProps);
    mountTest(Tabs);

    it('should has own list', () => {});
    it('should be visible correct content', () => {});
});
