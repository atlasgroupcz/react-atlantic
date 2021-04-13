import { TransferListProps } from '../../../../../types/TransferListProps';
import {
    useInnerTransferContext,
    useTransferContext,
} from '../../../../../context';
import { TransferDefaultRightSideItem } from '../components';

export const useTransferDefaultRightList = (
    props: Partial<TransferListProps>
): TransferListProps => {
    const { innerValue } = useInnerTransferContext();
    const { size, visibleRows } = useTransferContext();
    return {
        Item: TransferDefaultRightSideItem,
        options: innerValue ?? [],
        size,
        value: innerValue,
        visibleRows,
        ...props,
    };
};
