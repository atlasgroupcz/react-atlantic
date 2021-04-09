import { useTransferContext } from '../../../context';
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
        leftContainer,
        leftHeader,
        position,
    } = useTransferContext();
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
        leftContainer,
        leftHeader,
    };
};
