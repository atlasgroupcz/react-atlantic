import { FC } from 'react';
import { OptionType } from '../../Select';
import { TransferProps } from './Transfer';
import {
    TransferLeftSideItemProps,
    TransferRightSideItemProps,
} from './TransferItemProps';

export type TransferListProps = Pick<
    TransferProps<OptionType<string, any>>,
    'size' | 'visibleRows' | 'options' | 'value'
> & {
    Item: FC<TransferLeftSideItemProps | TransferRightSideItemProps>;
};
