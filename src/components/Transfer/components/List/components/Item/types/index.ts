import { ElementProps } from '../../../../../../../types/utils';
import { Size } from '../../../../../../../types';

export type StyledTransferListItemProps = {
    size?: Size;
};

export type FunctionalTransferListItemProps = {};

export type TransferListItemProps<
    T extends HTMLElement
> = FunctionalTransferListItemProps &
    StyledTransferListItemProps &
    ElementProps<T>;
