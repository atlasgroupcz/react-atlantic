import React, { createContext, useContext, FC } from 'react';
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
    return (
        <InnerTransferContext.Provider value={value}>
            {children}
        </InnerTransferContext.Provider>
    );
};
