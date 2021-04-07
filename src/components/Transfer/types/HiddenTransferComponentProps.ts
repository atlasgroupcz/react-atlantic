import { TransferProps } from './Transfer';

export type HiddenTransferComponentProps = {
    open: () => void;
    value: string;
} & Pick<TransferProps, 'size' | 'isDisabled' | 'isFullWidth'>;
