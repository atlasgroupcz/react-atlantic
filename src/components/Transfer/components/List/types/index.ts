import { ElementProps } from '../../../../../types/utils';
import { StyledComponentTransferProps } from '../../../types';

export type StyledTransferListProps = {} & Pick<
    StyledComponentTransferProps,
    'size' | 'visibleRows'
>;

export type FunctionalTransferListProps = {};

export type TransferListProps<
    T extends HTMLElement
> = FunctionalTransferListProps & StyledTransferListProps & ElementProps<T>;
