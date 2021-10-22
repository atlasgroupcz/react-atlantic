import { useCallback } from 'react';
import { useInnerTransferContext } from '../../../../../../../context';
import { UseTransferT } from '../../../../../../../hooks/useTransfer';

export const useAddOption = <T extends UseTransferT>(option: T) => {
    const { setInnerValue } = useInnerTransferContext();
    return useCallback(() => {
        setInnerValue?.((prev) => {
            return [...prev, option as any];
        });
    }, [option, setInnerValue]);
};
