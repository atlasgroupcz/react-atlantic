import { TransferProps } from './Transfer';

export type UseInnerTransferValue = Pick<
    TransferProps,
    | 'isDisabled'
    | 'visibleRows'
    | 'value'
    | 'cancelButtonProps'
    | 'clearButtonProps'
    | 'clearInputProps'
    | 'isFullWidth'
    | 'noResults'
    | 'size'
    | 'submitButtonProps'
    | 'label'
    | 'onOptionClick'
    | 'options'
    | 'preferredPosition'
>;

export type UseInnerTransferProps = TransferProps;

export type UseInnerTransfer = (
    props: UseInnerTransferProps
) => UseInnerTransferValue;
