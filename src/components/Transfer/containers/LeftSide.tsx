import { wrap } from '../../../utils';
import { TransferLeftSide } from '../components/ShownTransfer/components';
import { useTransferLeftSide } from '../components/ShownTransfer/hooks/useTransferLeftSide';

export const ControlledLeftSide = wrap(TransferLeftSide, useTransferLeftSide);
