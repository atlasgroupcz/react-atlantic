import { useCallback } from 'react';
import { OptionType } from '../../../Select';
import { useInnerTransferContext } from '../../context';

export const useAddOption = <T extends OptionType<string, string>>(
    option: T
) => {
    const { setInnerValue } = useInnerTransferContext();
    return useCallback(() => {
        setInnerValue?.((prev) => {
            return [...prev, option as any];
        });
    }, [option, setInnerValue]);
};
