import { UseTransferOptionT } from '..';

export const resolveRightSideOpen = (
    isOpen: boolean,
    value: UseTransferOptionT[] | undefined
): boolean => !!(isOpen && value && value.length > 0);
