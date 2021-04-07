import React, { createContext, useContext, FC } from 'react';
import {
    TransferContextProps,
    TransferContextState,
} from '../types/TransferContextProps';

export const TransferContext = createContext<TransferContextState>({} as any);
export const useTransferContext = () => useContext(TransferContext);

export const TransferProvider: FC<TransferContextProps> = ({
    children,
    ...props
}) => {
    return (
        <TransferContext.Provider value={props}>
            {children}
        </TransferContext.Provider>
    );
};
