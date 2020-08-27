import React, { createContext, useContext, FC } from 'react';
import { CollapseContextState, defaultCollapseContextState } from './types';
import { CollapseProviderPropsWithChildren } from './types';

type CollapseProviderType = FC<CollapseProviderPropsWithChildren>;
export const CollapseProvider: CollapseProviderType = ({
    children,
    isAccordion,
    activeUnique,
    expandIcon,
    expandIconPosition = defaultCollapseContextState.expandIconPosition,
    onClick,
    ...props
}) => {
    return (
        <CollapseContext.Provider
            value={{
                expandIconPosition,
                ...props,
                onClick,
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
