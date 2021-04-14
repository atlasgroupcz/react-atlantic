import { wrap } from '../../../../../../../../../../utils';
import { useTransferDefaultLeftSideItem } from './hooks';
import { TransferDefaultLeftSideItemView } from './views';

export const TransferDefaultLeftSideItem = wrap(
    TransferDefaultLeftSideItemView,
    useTransferDefaultLeftSideItem
);
