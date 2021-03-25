import { ElementProps } from '../../../../../../../types/utils';
import { Size } from '../../../../../../../types';
import { TransferProps } from '../../../../../types';

export type StyledTransferListItemProps = {
    size?: Size;
} & Pick<TransferProps, 'visibleItems' | 'isMultiLine'>;

export type FunctionalTransferListItemProps = {};

export type TransferListItemProps<
    T extends HTMLElement
> = FunctionalTransferListItemProps &
    StyledTransferListItemProps &
    ElementProps<T>;
