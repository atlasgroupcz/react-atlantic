import { wrap } from '../../../../../../../../../../utils';
import { useTransferDefaultClearButton } from './hooks';
import { TransformDefaultClearButtonView } from './views';

export const TransferDefaultClearButton = wrap(
    TransformDefaultClearButtonView,
    useTransferDefaultClearButton
);
