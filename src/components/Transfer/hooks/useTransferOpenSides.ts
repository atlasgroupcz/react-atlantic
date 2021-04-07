import { useTransferContext } from '../context';
import { TransferOpenSides } from '../types';
import { resolveLeftSideOpen } from '../utils/resolveLeftSideOpen';
import { resolveRightSideOpen } from '../utils/resolveRightSideOpen';

export const useTransferOpenSides = (): TransferOpenSides => {
    const { isOpen, value } = useTransferContext();
    const isLeftSideOpen = resolveLeftSideOpen(!!isOpen, value);
    const isRightSideOpen = resolveRightSideOpen(!!isOpen, value);
    const isHiddenTransfer = !isLeftSideOpen && !isRightSideOpen;
    return { isLeftSideOpen, isRightSideOpen, isHiddenTransfer };
};
