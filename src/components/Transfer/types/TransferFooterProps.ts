import { TransferProps } from './Transfer';

export type TransferFooterProps = {} & Pick<
    TransferProps,
    'cancelButtonProps' | 'submitButtonProps' | 'size'
>;
