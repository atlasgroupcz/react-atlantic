import { wrap } from '../../../utils';
import { TransferRightSide } from '../components/ShownTransfer/components';
import { useTransferRightSide } from '../components/ShownTransfer/hooks/useTransferRightSide';

export const ControlledRightSide = wrap(
    TransferRightSide,
    useTransferRightSide
);
