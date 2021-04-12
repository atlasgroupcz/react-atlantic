import { HorizontalPosition, Position } from '../../../types';
import { TransferProps } from './Transfer';
import { UseInnerTransferValue } from './UseInnerTransfer';

export type TransferContextProps = Omit<
    TransferProps,
    'HiddenTransferComponent' | 'innerTransferController'
> & {
    innerTransferController: NonNullable<
        TransferProps['innerTransferController']
    >;
};

export type TransferContextState = TransferContextProps;

export type InnerTransferContextProps = UseInnerTransferValue & {
    position: Position;
    leftRight: HorizontalPosition;
};
