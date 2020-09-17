import React, {
    PropsWithChildren,
    ReactElement,
    ReactText,
    useMemo,
} from 'react';
import { cleanReactKey } from '../utils/cleanReactKey';

export const useFilteredChildrenByKey: UseReactChildrenKeyFilter = (
    children,
    key
) => {
    const filteredChild = useMemo(() => {
        const childrenArray = React.Children.toArray(children);
        for (let i = 0; i < childrenArray.length; i++) {
            const child = childrenArray[i];
            if (React.isValidElement(child)) {
                const cleanedKey = cleanReactKey(child.key ?? i);
                const isActive = cleanedKey === key;

                if (isActive) {
                    return child;
                }
            }
        }
        return null;
    }, [children, key]);

    return filteredChild;
};

export type UseReactChildrenKeyFilter = (
    children: PropsWithChildren<any>['children'],
    activeKey?: ReactText
) => ReactElement | null;
