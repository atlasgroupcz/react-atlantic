import React, { useCallback } from 'react';
import { createContext, useContext, FC } from 'react';
import { CollapseContextState, defaultCollapseContextState } from './types';
import { CollapseProviderPropsWithChildren } from '.';
import { handleContextSet } from './Context.utils';

type CollapseProviderType = FC<CollapseProviderPropsWithChildren>;
export const CollapseProvider: CollapseProviderType = ({
    children,
    isAccordion,
    activeUnique,
    expandIcon,
    expandIconPosition = defaultCollapseContextState.expandIconPosition,
    setUniqueKey,
    ...props
}) => {
    const handleSetKey: CollapseContextState['setUniqueKey'] = useCallback(
        (key) => handleContextSet({ key, isAccordion, setUniqueKey }),
        [isAccordion, setUniqueKey]
    );

    return (
        <CollapseContext.Provider
            value={{
                expandIconPosition,
                ...props,
                setUniqueKey: handleSetKey,
                activeUnique,
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
