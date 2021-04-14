import { wrap } from '../../../../../../utils';
import { TransferDefaultListView } from './views';
import {
    useTransferDefaultLeftList,
    useTransferDefaultRightList,
} from './hooks';

export const TransferDefaultLeftList = wrap(
    TransferDefaultListView,
    useTransferDefaultLeftList
);

export const TransferDefaultRightList = wrap(
    TransferDefaultListView,
    useTransferDefaultRightList
);
