import { wrap } from '../../../../utils';
import { Input } from '../../../Input';
import { useTransferDefaultHiddenComponent } from './hooks';

export const TransferDefaultHiddenComponent = wrap(
    Input,
    useTransferDefaultHiddenComponent
);
