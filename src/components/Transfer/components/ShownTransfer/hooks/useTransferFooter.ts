import { useInnerTransferContext } from '../../../context';
import { TransferFooterProps } from '../../../types/TransferFooterProps';

export const useTransferFooter = (_: {}): TransferFooterProps => {
    const {
        size,
        submitButtonProps,
        cancelButtonProps,
    } = useInnerTransferContext();
    return { size, submitButtonProps, cancelButtonProps };
};
