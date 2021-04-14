import React, { createContext, useContext, FC, useMemo } from 'react';
import { TransferContextProps, TransferContextState } from '../../types';

export const TransferContext = createContext<TransferContextState>({} as any);
export const useTransferContext = () => useContext(TransferContext);

export const TransferProvider: FC<TransferContextProps> = ({
    children,
    ...props
}) => {
    const memoizedValue = useMemo(() => props, [props]);
    return (
        <TransferContext.Provider value={memoizedValue}>
            {children}
        </TransferContext.Provider>
    );
};
