import { Position } from '../../../types';
import { TransferProps } from './Transfer';

export type TransferContextProps = Omit<
    TransferProps,
    'positionController' | 'HiddenTransferComponent'
> & {
    position: Position;
};

export type TransferContextState = TransferContextProps;
