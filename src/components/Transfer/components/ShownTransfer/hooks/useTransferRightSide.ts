import { useInnerTransferContext } from '../../../context';
import { useTransferOpenSides } from '../../../hooks/Inner/useTransferOpenSides';
import { TransferRightSideProps } from '../components';

export const useTransferRightSide = (_: {}): TransferRightSideProps<
    HTMLDivElement
> => {
    const { isRightSideOpen } = useTransferOpenSides();
    const { position, ...props } = useInnerTransferContext();
    return {
        position,
        isVisible: isRightSideOpen,
        ...props,
    };
};
