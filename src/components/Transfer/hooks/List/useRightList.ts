import { ControlledRightSideItem } from '../../components/ShownTransfer/components';
import { useInnerTransferContext, useTransferContext } from '../../context';
import { TransferListProps } from '../../types/TransferListProps';

export const useRightList = (
    props: Partial<TransferListProps>
): TransferListProps => {
    const { innerValue } = useInnerTransferContext();
    const { size, visibleRows } = useTransferContext();
    return {
        Item: ControlledRightSideItem,
        options: innerValue ?? [],
        size,
        value: innerValue,
        visibleRows,
        ...props,
    };
};
