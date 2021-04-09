import React, { createContext, useContext, FC } from 'react';
import { InnerTransferContextState, TransferContextProps } from '../../types';

export const InnerTransferContext = createContext<InnerTransferContextState>(
    {} as any
);
export const useInnerTransferContext = () => useContext(InnerTransferContext);

export const InnerTransferProvider: FC<TransferContextProps> = ({
    children,
    innerTransferController,
    ...props
}) => {
    const value = innerTransferController(props);
    return (
        <InnerTransferContext.Provider value={value}>
            {children}
        </InnerTransferContext.Provider>
    );
};
