import { TransferRightSideProps } from '../views';
import { useInnerTransferContext } from '../../../../../context';
import { useTransferOpenSides } from '../../../../../hooks/Inner/useTransferOpenSides';

export const useTransferRightSide = (_: {}): TransferRightSideProps<
    HTMLDivElement
> => {
    const { position, innerValue, ...props } = useInnerTransferContext();
    const { isRightSideOpen } = useTransferOpenSides(innerValue);
    return {
        position,
        isVisible: isRightSideOpen,
        ...props,
    };
};
