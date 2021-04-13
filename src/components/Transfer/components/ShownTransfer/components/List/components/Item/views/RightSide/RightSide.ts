import { wrap } from '../../../../../../../../../../utils';
import { useTransferDefaultRightSideItem } from './hooks';
import { TransferDefaultRightSideItemView } from './views';

export const TransferDefaultRightSideItem = wrap(
    TransferDefaultRightSideItemView,
    useTransferDefaultRightSideItem
);
