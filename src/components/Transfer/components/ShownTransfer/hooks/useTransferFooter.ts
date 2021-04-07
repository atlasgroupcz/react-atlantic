import { useTransferContext } from '../../../context';
import { TransferFooterProps } from '../../../types/TransferFooterProps';

export const useTransferFooter = (_: {}): TransferFooterProps => {
    const { size, submitButtonProps, cancelButtonProps } = useTransferContext();
    return { size, submitButtonProps, cancelButtonProps };
};
