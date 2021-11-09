import { Dispatch, SetStateAction } from 'react';
import { OptionType } from '../../Select';
import { TransferProps } from './Transfer';

export type UseInnerTransferValue = Pick<
    TransferProps<OptionType<string, any>>,
    'isDisabled' | 'onOptionClick'
> & {
    innerValue: TransferProps<OptionType<string, any>>['value'];
    setInnerValue: TransferProps<OptionType<string, any>>['setValue'];
    innerOptions: TransferProps<OptionType<string, any>>['options'];
    setInnerOptions: Dispatch<
        SetStateAction<TransferProps<OptionType<string, any>>['options']>
    >;
};

export type UseInnerTransferProps = TransferProps<OptionType<string, any>> & {
    isSorted?: boolean;
};

export type UseInnerTransfer = (
    props: UseInnerTransferProps
) => UseInnerTransferValue;
