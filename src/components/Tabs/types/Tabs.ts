import { FC } from 'react';
/**
 * Children should have key prop which will be taken as constraint.
 * If value === key of children then it will be seen.
 */

export type HandleTabsClick = (
    e: React.MouseEvent<Element, MouseEvent>,
    key: string
) => void;

type TabsSharedProps = {
    activeKey: string;
    onClick?: HandleTabsClick;
};

export type TabsProps<T extends TabListProps = TabListProps> = {
    List: FC<T>;
} & TabsSharedProps;

export type TabListProps = {} & Required<TabsSharedProps>;
