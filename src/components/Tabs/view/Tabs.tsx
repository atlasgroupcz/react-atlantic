import React, { FC, useCallback } from 'react';
import { TabListProps, TabsProps, HandleTabsClick } from '../types';
import { useFilteredChildrenByKey } from '../hooks/useFilteredChildrenByKey';

export const Tabs = <T extends TabListProps>({
    List,
    activeKey,
    onClick,
    children,
    ...props
}: TabsProps<T>): ReturnType<FC<TabsProps<T>>> => {
    const child = useFilteredChildrenByKey(children, activeKey);
    //TODO: type error :{}
    const Component = List as FC<TabListProps>;

    const handleClick: HandleTabsClick = useCallback(
        (e, k) => {
            onClick?.(e, k);
        },
        [onClick]
    );

    return (
        <>
            <Component onClick={handleClick} activeKey={activeKey} {...props} />
            {child}
        </>
    );
};
