import { useCallback } from 'react';
import { OptionType } from '../../../Select';
import { useInnerTransferContext } from '../../context';

export const useDeleteOption = <T extends OptionType<string, string>>(
    option: T
) => {
    const { setInnerValue } = useInnerTransferContext();
    return useCallback(() => {
        setInnerValue?.((prev) => prev.filter((v) => v.value !== option.value));
    }, [option.value, setInnerValue]);
};
