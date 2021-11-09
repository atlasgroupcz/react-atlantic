import { useCallback } from 'react';
import { OptionType } from '../../../../../../../../Select';
import { useInnerTransferContext } from '../../../../../../../context';

export const useAddOption = <T extends OptionType>(option: T) => {
    const { setInnerValue } = useInnerTransferContext();
    return useCallback(() => {
        setInnerValue?.((prev: any) => {
            return [...prev, option as any];
        });
    }, [option, setInnerValue]);
};
