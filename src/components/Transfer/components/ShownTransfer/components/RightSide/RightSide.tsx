import { wrap } from '../../../../../../utils';
import { TransferDefaultRightSideView } from './views';
import { useTransferRightSide } from './hooks';

export const TransferDefaultRightSide = wrap(
    TransferDefaultRightSideView,
    useTransferRightSide
);
