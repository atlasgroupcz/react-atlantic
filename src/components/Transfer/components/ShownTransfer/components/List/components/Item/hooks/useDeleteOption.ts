import { useCallback } from 'react';
import { UseTransferOptionT } from '../../../../../../..';
import { useInnerTransferContext } from '../../../../../../../context';

export const useDeleteOption = (option: UseTransferOptionT) => {
    const { setInnerValue } = useInnerTransferContext();
    return useCallback(() => {
        setInnerValue?.((prev) => prev.filter((v) => v.value !== option.value));
    }, [option.value, setInnerValue]);
};
