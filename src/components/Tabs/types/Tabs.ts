import { FC, PropsWithChildren, ReactText } from 'react';
/**
 * Children should have key prop which will be taken as constraint.
 * If value === key of children then it will be seen.
 */

export type HandleTabsClick = (
    e: React.MouseEvent<Element, MouseEvent>,
    key: ReactText
) => void;

type TabsSharedProps = {
    activeKey?: ReactText;
    onClick?: HandleTabsClick;
};

export type TabsPropsWithoutChildren<T extends TabListProps = TabListProps> = {
    List: FC<T>;
} & TabsSharedProps;

export type TabsProps<
    T extends TabListProps = TabListProps
> = PropsWithChildren<TabsPropsWithoutChildren<T>>;

export type TabListProps = Required<Pick<TabsSharedProps, 'onClick'>> &
    Pick<TabsSharedProps, 'activeKey'>;
