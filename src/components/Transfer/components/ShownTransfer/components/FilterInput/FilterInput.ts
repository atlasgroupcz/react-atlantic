import { wrap } from '../../../../../../utils';
import { Input } from '../../../../../Input';
import { useTransferDefaultFilterInput } from './hooks';

export const TransferDefaultFilterInput = wrap(
    Input,
    useTransferDefaultFilterInput
);
