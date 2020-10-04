import React, { FC } from 'react';
import { useTabs } from '../../context';
import { ActiveIdType } from '../../types/ActiveIdType';

export interface TabProps {
    id: ActiveIdType;
}
export type TabType = FC<TabProps>;

export const Tab: TabType = ({ id, children }) => {
    const { activeId } = useTabs();
    return <>{activeId === id ? children : null}</>;
};
