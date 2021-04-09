import { ControlledLeftSideItem } from '../../components/ShownTransfer/components';
import { useInnerTransferContext, useTransferContext } from '../../context';
import { TransferListProps } from '../../types/TransferListProps';

export const useLeftList = (_: {}): TransferListProps => {
    const { innerValue } = useInnerTransferContext();
    const { options, size, visibleRows } = useTransferContext();
    return {
        Item: ControlledLeftSideItem,
        options,
        size,
        value: innerValue,
        visibleRows,
    };
};
