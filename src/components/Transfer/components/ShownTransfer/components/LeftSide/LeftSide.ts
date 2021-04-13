import { wrap } from '../../../../../../utils';
import {
    TransferComposedLeftSideView,
    TransferDefaultLeftSideView,
} from './views';
import {
    useTransferComposedLeftSide,
    useTransferDefaultLeftSide,
} from './hooks';

export const TransferComposedLeftSide = wrap(
    TransferComposedLeftSideView,
    useTransferComposedLeftSide
);

export const TransferDefaultLeftSide = wrap(
    TransferDefaultLeftSideView,
    useTransferDefaultLeftSide
);
