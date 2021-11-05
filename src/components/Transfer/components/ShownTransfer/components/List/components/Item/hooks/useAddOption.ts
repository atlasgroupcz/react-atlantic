import { useCallback } from 'react';
import { useInnerTransferContext } from '../../../../../../../context';
import { UseTransferOptionT } from '../../../../../../../types/Transfer';

export const useAddOption = (option: UseTransferOptionT) => {
    const { setInnerValue } = useInnerTransferContext();
    return useCallback(() => {
        setInnerValue?.((prev) => {
            return [...prev, option as any];
        });
    }, [option, setInnerValue]);
};
