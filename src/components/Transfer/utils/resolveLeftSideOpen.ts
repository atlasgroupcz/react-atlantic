import { UseTransferOptionT } from '..';

export const resolveLeftSideOpen = (
    isOpen: boolean,
    value: UseTransferOptionT[] | undefined
) => isOpen && !!value;
