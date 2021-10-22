import { UseTransferT } from '../hooks/useTransfer';

export const resolveLeftSideOpen = (
    isOpen: boolean,
    value: UseTransferT[] | undefined
) => isOpen && !!value;
