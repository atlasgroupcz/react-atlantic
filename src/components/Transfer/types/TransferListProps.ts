import { FC } from 'react';
import { TransferProps } from './Transfer';
import {
    TransferLeftSideItemProps,
    TransferRightSideItemProps,
} from './TransferItemProps';

export type TransferListProps = Pick<
    TransferProps,
    'size' | 'visibleRows' | 'options' | 'value'
> & {
    Item: FC<TransferLeftSideItemProps | TransferRightSideItemProps>;
};
