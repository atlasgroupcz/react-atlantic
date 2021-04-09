import { Position } from '../../../types';
import { TransferProps } from './Transfer';

export type TransferContextProps = Omit<
    TransferProps,
    'positionController' | 'HiddenTransferComponent' | 'innerTransferController'
> & {
    position: Position;
    innerTransferController: NonNullable<
        TransferProps['innerTransferController']
    >;
};

export type TransferContextState = TransferContextProps;
