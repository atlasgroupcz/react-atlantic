import { useInnerTransferContext, useTransferContext } from '../../../context';
import { useTransferOpenSides } from '../../../hooks';
import { TransferRightSideProps } from '../components';

export const useTransferRightSide = (_: {}): TransferRightSideProps<
    HTMLDivElement
> => {
    const { position } = useTransferContext();
    const { isRightSideOpen } = useTransferOpenSides();
    const { ...props } = useInnerTransferContext();
    return {
        position,
        isVisible: isRightSideOpen,
        ...props,
    };
};
