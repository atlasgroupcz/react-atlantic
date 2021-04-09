import { useCallback } from 'react';
import { useTransferContext } from '../../context';

//TODO: add cancel method props
export const useInnerTransferCancel = () => {
    const { isDisabled, setOpen } = useTransferContext();

    return useCallback(() => {
        if (!isDisabled) {
            setOpen?.(false);
        }
    }, [isDisabled, setOpen]);
};
