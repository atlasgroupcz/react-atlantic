import React, { createContext, FC, useContext, useMemo, useState } from 'react';
import { TabsContextStateType } from '../types/Tabs';

const initialState: TabsContextStateType = {
    activeId: '',
    setActiveId: (_newId) => {
        throw new Error(
            'Unreachable `TabsContextProvider`, you are probably trying to access `TabsContext` from outside `Tabs`'
        );
    },
};

const TabsContext = createContext<TabsContextStateType>(initialState);

export const useTabs = () => useContext(TabsContext);

export interface TabsProviderProps {
    initialActiveId: TabsContextStateType['activeId'];
}
export type TabsProviderType = FC<TabsProviderProps>;

export const TabsProvider: TabsProviderType = ({
    initialActiveId,
    children,
}) => {
    const [activeId, setActiveId] = useState<TabsContextStateType['activeId']>(
        initialActiveId
    );

    const value = useMemo(() => ({ activeId, setActiveId }), [activeId]);

    return (
        <TabsContext.Provider value={value}>{children}</TabsContext.Provider>
    );
};
