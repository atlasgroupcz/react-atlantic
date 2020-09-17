import { FC } from 'react';
/**
 * Children should have key prop which will be taken as constraint.
 * If value === key of children then it will be seen.
 */

type TabsSharedProps = {
    activeKey: string;
    onClick: (e: React.MouseEvent<Element, MouseEvent>, key: string) => void;
};

export type TabsProps<T extends TabListProps> = {
    List: FC<T>;
} & TabsSharedProps;

export type TabListProps = {} & TabsSharedProps;
