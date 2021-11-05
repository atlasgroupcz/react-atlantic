import { useTransferContext } from '../../context';
import { TransferOpenSides, UseTransferOptionT } from '../../types';
import { resolveLeftSideOpen } from '../../utils/resolveLeftSideOpen';
import { resolveRightSideOpen } from '../../utils/resolveRightSideOpen';

export const useTransferOpenSides = (
    value: UseTransferOptionT[] | undefined
): TransferOpenSides => {
    const { isOpen } = useTransferContext();
    const isLeftSideOpen = resolveLeftSideOpen(!!isOpen, value);
    const isRightSideOpen = resolveRightSideOpen(!!isOpen, value);
    const isHiddenTransfer = !isLeftSideOpen && !isRightSideOpen;
    return { isLeftSideOpen, isRightSideOpen, isHiddenTransfer };
};
