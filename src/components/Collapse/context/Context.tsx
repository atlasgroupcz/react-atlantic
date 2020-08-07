import React, { ReactText } from 'react';
import { createContext, useContext, FC } from 'react';
import { CollapseContextState, defaultCollapseContextState } from './types';
import { CollapseProviderPropsWithChildren } from '.';

type CollapseProviderType = FC<CollapseProviderPropsWithChildren>;
export const CollapseProvider: CollapseProviderType = ({
    children,
    accordion,
    activeKey,
    expandIcon,
    setActiveKey,
    ...props
}) => {
    const handleSetKey: CollapseContextState['setActiveKey'] = (
        key: ReactText
    ) => {
        if (accordion) {
            setActiveKey(key);
            console.log(`setting ${key}`);
        } else {
            console.log(`setting in else`);
            setActiveKey((prevState) => {
                if (Array.isArray(prevState)) {
                } else {
                }
                return prevState;
            });
        }
    };

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
