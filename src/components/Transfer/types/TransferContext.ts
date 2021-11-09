import { MutableRefObject } from 'react';
import { HorizontalPosition, Position } from '../../../types';
import { OptionType } from '../../Select';
import { TransferProps } from './Transfer';
import { UseInnerTransferValue } from './UseInnerTransfer';

export type TransferContextProps = Omit<
    TransferProps<OptionType<string, any>>,
    'HiddenTransferComponent' | 'innerTransferController'
> & {
    innerTransferController: NonNullable<
        TransferProps<OptionType<string, any>>['innerTransferController']
    >;
    rectFromHiddenTransfer: MutableRefObject<DOMRect | null>;
};

export type TransferContextState = TransferContextProps;

export type InnerTransferContextProps = UseInnerTransferValue & {
    position: Position;
    leftRight: HorizontalPosition;
};

export type InnerTransferContextState = InnerTransferContextProps;
