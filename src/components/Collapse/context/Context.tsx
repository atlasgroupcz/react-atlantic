import React, { useCallback } from 'react';
import { createContext, useContext, FC } from 'react';
import { CollapseContextState, defaultCollapseContextState } from './types';
import { CollapseProviderPropsWithChildren } from '.';
import { handleContextSet } from './Context.utils';

type CollapseProviderType = FC<CollapseProviderPropsWithChildren>;
export const CollapseProvider: CollapseProviderType = ({
    children,
    accordion,
    activeKey,
    expandIcon,
    setActiveKey,
    ...props
}) => {
    const handleSetKey: CollapseContextState['setActiveKey'] = useCallback(
        (key) => handleContextSet({ key, accordion, setActiveKey }),
        [accordion, setActiveKey]
    );

    return (
        <CollapseContext.Provider
            value={{
                ...props,
                setActiveKey: handleSetKey,
                activeKey,
                expandIcon,
            }}
        >
            {children}
        </CollapseContext.Provider>
    );
};

const CollapseContext = createContext<CollapseContextState>(
    defaultCollapseContextState
);
export const useCollapseContext = () =>
    useContext<CollapseContextState>(CollapseContext);
