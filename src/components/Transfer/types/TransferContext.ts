import { MutableRefObject } from 'react';
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
    rectFromHiddenTransfer: MutableRefObject<DOMRect | null>;
};

export type TransferContextState = TransferContextProps;

export type InnerTransferContextProps = UseInnerTransferValue & {
    position: Position;
    leftRight: HorizontalPosition;
};

export type InnerTransferContextState = InnerTransferContextProps;
