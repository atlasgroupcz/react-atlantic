import { OptionType } from '../../Select';
import { TransferProps } from '../types';

export const DEFAULT_WIDTHS_TRANSFER: TransferProps<
    OptionType<string, any>
>['customWidth'] = {
    partiallyOpen: '300px',
    fullyOpen: '600px',
};
