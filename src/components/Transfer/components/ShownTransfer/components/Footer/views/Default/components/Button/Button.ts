import { wrap } from '../../../../../../../../../../utils';
import { Button } from '../../../../../../../../../Button';
import {
    useTransferDefaultCancelButton,
    useTransferDefaultSubmitButton,
} from './hooks';

export const TransferDefaultCancelButton = wrap(
    Button,
    useTransferDefaultCancelButton
);

export const TransferDefaultSubmitButton = wrap(
    Button,
    useTransferDefaultSubmitButton
);
