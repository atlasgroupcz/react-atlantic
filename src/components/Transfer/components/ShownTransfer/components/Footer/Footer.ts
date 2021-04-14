import { wrap } from '../../../../../../utils';
import { TransferDefaultFooterView } from './views';
import { useTransferDefaultFooter } from './hooks';

export const TransferDefaultFooter = wrap(
    TransferDefaultFooterView,
    useTransferDefaultFooter
);
