import { useCallback } from 'react';
import { OptionType } from '../../../../../../../../Select';
import { useInnerTransferContext } from '../../../../../../../context';

export const useDeleteOption = <T extends OptionType<string, any>>(
    option: T
) => {
    const { setInnerValue } = useInnerTransferContext();
    return useCallback(() => {
        setInnerValue?.((prev: OptionType<string, any>[]) =>
            prev.filter((v: any) => v.value !== option.value)
        );
    }, [option.value, setInnerValue]);
};
