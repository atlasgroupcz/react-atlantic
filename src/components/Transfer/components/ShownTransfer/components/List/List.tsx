import React, { FC } from 'react';
import { StyledTransferList } from './styles';
import { TransferListItem, TransferListItemType } from './components';
import { TransferListProps } from './types';

export type TransferListType = FC<TransferListProps<HTMLUListElement>> & {
    Item: TransferListItemType;
};

export const TransferList: TransferListType = ({ ...props }) => (
    <StyledTransferList {...props} />
);

TransferList.Item = TransferListItem;
