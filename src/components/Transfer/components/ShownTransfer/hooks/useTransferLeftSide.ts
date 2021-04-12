import { useInnerTransferContext, useTransferContext } from '../../../context';
import { useTransferOpenSides } from '../../../hooks/Inner/useTransferOpenSides';
import { TransferLeftSideProps } from '../../../types';

export const useTransferLeftSide = (_: {}): TransferLeftSideProps => {
    const {
        onOptionClick,
        value,
        size,
        noResults,
        visibleRows,
        isFullWidth,
        isDisabled,
        options,
        leftContainer,
        leftHeader,
    } = useTransferContext();
    const { position } = useInnerTransferContext();
    const { isLeftSideOpen, isRightSideOpen } = useTransferOpenSides();

    return {
        onOptionClick,
        options,
        isDisabled,
        isFullWidth,
        isLeftSideOpen,
        isRightSideOpen,
        noResults,
        size,
        value,
        visibleRows,
        leftContainer,
        leftHeader,
        position,
    };
};
