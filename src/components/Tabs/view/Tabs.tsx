import React, { PropsWithChildren, FC } from 'react';
import { TabListProps, TabsProps } from '../types';
import { useFilteredChildrenByKey } from '../hooks/useFilteredChildrenByKey';

export const Tabs = <T extends TabListProps>({
    List: ListComponent,
    activeKey,
    onClick,
    children,
}: PropsWithChildren<TabsProps<T>>) => {
    const child = useFilteredChildrenByKey(activeKey, children);
    //TODO: type error :{}
    const Component = ListComponent as FC<TabListProps>;
    return (
        <>
            <Component onClick={onClick} activeKey={activeKey} />
            {child}
        </>
    );
};
