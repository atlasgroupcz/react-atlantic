import { ControlledLeftSideItem } from '../../components/ShownTransfer/components';
import { useInnerTransferContext, useTransferContext } from '../../context';
import { TransferListProps } from '../../types/TransferListProps';

export const useLeftList = (_: {}): TransferListProps => {
    const { innerValue, innerOptions } = useInnerTransferContext();
    const { size, visibleRows } = useTransferContext();
    return {
        Item: ControlledLeftSideItem,
        options: innerOptions,
        size,
        value: innerValue,
        visibleRows,
    };
};
