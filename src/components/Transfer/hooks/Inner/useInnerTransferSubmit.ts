import { useCallback } from 'react';
import { useInnerTransferContext, useTransferContext } from '../../context';

//TODO: add submit method props
export const useInnerTransferSubmit = () => {
    const { isDisabled, setOpen, setValue } = useTransferContext();
    const { innerValue } = useInnerTransferContext();

    return useCallback(() => {
        if (!isDisabled) {
            setOpen?.(false);
            setValue?.(innerValue ?? []);
        }
    }, [innerValue, isDisabled, setOpen, setValue]);
};
