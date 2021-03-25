import React, { FC } from 'react';
import { StyledTransferListItem } from './styles';
import { TransferListItemProps } from './types';

export type TransferListItemType = FC<TransferListItemProps<HTMLLIElement>>;

export const TransferListItem: TransferListItemType = React.forwardRef<
    HTMLLIElement,
    TransferListItemProps<HTMLLIElement>
>(({ ...props }, ref) => <StyledTransferListItem {...props} ref={ref} />);
