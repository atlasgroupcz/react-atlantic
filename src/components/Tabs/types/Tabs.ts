import { FC } from 'react';
import { TabListType } from './TabList';

export type TabsProps = {
    List: TabListType;
    activeKey: string;
    onClick: (e: React.MouseEvent<Element, MouseEvent>, key: string) => void;
};
export type TabsType = FC<TabsProps>;
