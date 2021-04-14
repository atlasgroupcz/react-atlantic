import { useCallback } from 'react';
import { useTransferContext } from '../context';

export const useHiddenTransfer = () => {
    const { setOpen, isDisabled } = useTransferContext();

    return useCallback(() => {
        if (!isDisabled) {
            setOpen?.(true);
        }
    }, [isDisabled, setOpen]);
};
