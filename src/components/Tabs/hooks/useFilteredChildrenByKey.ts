import React, {
    PropsWithChildren,
    ReactElement,
    ReactText,
    useMemo,
} from 'react';
import { cleanReactKey } from '../utils/cleanReactKey';

export const useFilteredChildrenByKey: UseReactChildrenKeyFilter = (
    activeKey,
    children
) => {
    const filteredChild = useMemo(() => {
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

    return filteredChild;
};

export type UseReactChildrenKeyFilter = (
    activeKey: ReactText,
    children: PropsWithChildren<any>['children']
) => ReactElement | null;
