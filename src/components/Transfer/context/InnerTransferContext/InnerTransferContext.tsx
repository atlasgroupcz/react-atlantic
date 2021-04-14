import React, { createContext, useContext, FC, useMemo } from 'react';
import {
    InnerTransferContextProps,
    InnerTransferContextState,
} from '../../types';

export const InnerTransferContext = createContext<InnerTransferContextState>(
    {} as any
);
export const useInnerTransferContext = () => useContext(InnerTransferContext);

export const InnerTransferProvider: FC<InnerTransferContextProps> = ({
    children,
    ...value
}) => {
    const memoizedValue = useMemo(() => value, [value]);
    return (
        <InnerTransferContext.Provider value={memoizedValue}>
            {children}
        </InnerTransferContext.Provider>
    );
};
