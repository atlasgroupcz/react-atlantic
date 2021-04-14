import { wrap } from '../../../../../../../../../../utils';
import { useTransferDefaultHeaderLabel } from './hooks';
import { TransferDefaultHeaderLabelView } from './views';

export const TransferDefaultHeaderLabel = wrap(
    TransferDefaultHeaderLabelView,
    useTransferDefaultHeaderLabel
);
