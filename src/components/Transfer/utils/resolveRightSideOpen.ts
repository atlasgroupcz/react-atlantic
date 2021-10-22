import { UseTransferT } from '../hooks/useTransfer';

export const resolveRightSideOpen = (
    isOpen: boolean,
    value: UseTransferT[] | undefined
): boolean => !!(isOpen && value && value.length > 0);
