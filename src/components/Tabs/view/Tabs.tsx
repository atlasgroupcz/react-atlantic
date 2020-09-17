import React, { PropsWithChildren, FC, useCallback } from 'react';
import { TabListProps, TabsProps, HandleTabsClick } from '../types';
import { useFilteredChildrenByKey } from '../hooks/useFilteredChildrenByKey';

export const Tabs = <T extends TabListProps>({
    List: ListComponent,
    activeKey,
    onClick,
    children,
}: PropsWithChildren<TabsProps<T>>): ReturnType<
    FC<PropsWithChildren<TabsProps<T>>>
> => {
    const child = useFilteredChildrenByKey(activeKey, children);
    //TODO: type error :{}
    const Component = ListComponent as FC<TabListProps>;

    const handleClick: HandleTabsClick = useCallback(
        (e, k) => {
            onClick?.(e, k);
        },
        [onClick]
    );

    return (
        <>
            <Component onClick={handleClick} activeKey={activeKey} />
            {child}
        </>
    );
};
