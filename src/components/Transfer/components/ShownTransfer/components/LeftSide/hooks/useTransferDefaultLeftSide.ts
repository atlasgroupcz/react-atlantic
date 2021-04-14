import { TransferLeftSideViewProps } from '../../../../../types';
import {
    useInnerTransferContext,
    useTransferContext,
} from '../../../../../context';
import { useTransferOpenSides } from '../../../../../hooks/Inner/useTransferOpenSides';

export const useTransferDefaultLeftSide = (_: {}): TransferLeftSideViewProps => {
    const {
        size,
        noResults,
        isFullWidth,
        isDisabled,
        leftContainer,
        leftHeader,
    } = useTransferContext();
    const { position, innerValue } = useInnerTransferContext();
    const { isLeftSideOpen, isRightSideOpen } = useTransferOpenSides(
        innerValue
    );

    return {
        isDisabled,
        isFullWidth,
        isLeftSideOpen,
        isRightSideOpen,
        noResults,
        size,
        leftContainer,
        leftHeader,
        position,
    };
};
