import React, { FC } from 'react';
import { StyledTransferListItem } from './styles';
import { TransferListItemProps } from './types';

export type TransferListItemType = FC<TransferListItemProps<HTMLLIElement>>;

export const TransferListItem: TransferListItemType = ({ ...props }) => (
    <StyledTransferListItem {...props} />
);
