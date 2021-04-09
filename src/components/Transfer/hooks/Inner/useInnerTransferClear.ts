import { useCallback } from 'react';
import { useInnerTransferContext, useTransferContext } from '../../context';

//TODO: add clear method props
export const useInnerTransferClear = () => {
    const { isDisabled } = useTransferContext();
    const { setInnerValue } = useInnerTransferContext();

    return useCallback(() => {
        if (!isDisabled) {
            setInnerValue?.([]);
        }
    }, [isDisabled, setInnerValue]);
};
