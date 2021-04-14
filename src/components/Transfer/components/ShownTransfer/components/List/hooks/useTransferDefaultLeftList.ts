import {
    useInnerTransferContext,
    useTransferContext,
} from '../../../../../context';
import { TransferListProps } from '../../../../../types/TransferListProps';
import { TransferDefaultLeftSideItem } from '../components';

export const useTransferDefaultLeftList = (_: {}): TransferListProps => {
    const { innerValue, innerOptions } = useInnerTransferContext();
    const { size, visibleRows } = useTransferContext();
    return {
        Item: TransferDefaultLeftSideItem,
        options: innerOptions,
        size,
        value: innerValue,
        visibleRows,
    };
};
