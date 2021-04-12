import { useInnerTransferContext, useTransferContext } from '../../context';
import { TransferOpenSides } from '../../types';
import { resolveLeftSideOpen } from '../../utils/resolveLeftSideOpen';
import { resolveRightSideOpen } from '../../utils/resolveRightSideOpen';

export const useTransferOpenSides = (): TransferOpenSides => {
    const { isOpen } = useTransferContext();
    const { innerValue } = useInnerTransferContext();
    const isLeftSideOpen = resolveLeftSideOpen(!!isOpen, innerValue);
    const isRightSideOpen = resolveRightSideOpen(!!isOpen, innerValue);
    const isHiddenTransfer = !isLeftSideOpen && !isRightSideOpen;
    return { isLeftSideOpen, isRightSideOpen, isHiddenTransfer };
};
