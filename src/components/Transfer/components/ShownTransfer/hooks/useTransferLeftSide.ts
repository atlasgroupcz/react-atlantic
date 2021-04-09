import { useInnerTransferContext } from '../../../context';
import { useTransferOpenSides } from '../../../hooks/useTransferOpenSides';
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
        clearInputProps,
        position,
    } = useInnerTransferContext();
    const { isLeftSideOpen, isRightSideOpen } = useTransferOpenSides();

    return {
        onOptionClick,
        options,
        position,
        clearInputProps,
        isDisabled,
        isFullWidth,
        isLeftSideOpen,
        isRightSideOpen,
        noResults,
        size,
        value,
        visibleRows,
    };
};
