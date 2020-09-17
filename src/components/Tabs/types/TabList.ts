import { FC } from 'react';
import { TabsProps } from './Tabs';

export type TabListProps = {} & Pick<TabsProps, 'onClick' | 'activeKey'>;
export type TabListType = FC<TabListProps>;
