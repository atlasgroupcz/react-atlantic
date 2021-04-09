import { Dispatch, SetStateAction } from 'react';
import { TransferProps } from './Transfer';

export type UseInnerTransferValue = Pick<
    TransferProps,
    'isDisabled' | 'onOptionClick'
> & {
    innerValue: TransferProps['value'];
    setInnerValue: TransferProps['setValue'];
    innerOptions: TransferProps['options'];
    setInnerOptions: Dispatch<SetStateAction<TransferProps['options']>>;
};

export type UseInnerTransferProps = TransferProps;

export type UseInnerTransfer = (
    props: UseInnerTransferProps
) => UseInnerTransferValue;
