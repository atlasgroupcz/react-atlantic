import React, { useMemo, ReactText } from 'react';
import { TabsType } from '../types';

/**
 * Children should have key prop which will be taken as constraint.
 * If value === key of children then it will be seen.
 */
export const Tabs: TabsType = ({ List, children, onClick, activeKey }) => {
    const modifiedActiveContentChildren = useMemo(() => {
        const childrenArray = React.Children.toArray(children);
        for (let i = 0; i < childrenArray.length; i++) {
            const child = childrenArray[i];
            console.log(child);
            if (React.isValidElement(child)) {
                const cleanedKey = cleanReactKey(child.key ?? i);
                const isActive = cleanedKey === activeKey;

                if (isActive) {
                    return child;
                }
            }
        }
        return null;
    }, [children, activeKey]);

    return (
        <>
            <List onClick={onClick} activeKey={activeKey} />
            {modifiedActiveContentChildren}
        </>
    );
};

const cleanReactKey = (reactKey: ReactText) => {
    if (typeof reactKey === 'number') return reactKey;
    const keyAsString = reactKey.toString();
    return keyAsString.substr(
        keyAsString.includes('$') ? 2 : 1,
        keyAsString.length
    );
};
