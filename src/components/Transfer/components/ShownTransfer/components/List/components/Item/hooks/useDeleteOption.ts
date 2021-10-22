import { useCallback } from 'react';
import { useInnerTransferContext } from '../../../../../../../context';
import { UseTransferT } from '../../../../../../../hooks/useTransfer';

export const useDeleteOption = <T extends UseTransferT>(option: T) => {
    const { setInnerValue } = useInnerTransferContext();
    return useCallback(() => {
        setInnerValue?.((prev) => prev.filter((v) => v.value !== option.value));
    }, [option.value, setInnerValue]);
};
