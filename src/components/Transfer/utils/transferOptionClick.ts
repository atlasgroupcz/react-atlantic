import { UseTransferT } from '../hooks/useTransfer';

export const transferOptionClick = <T extends UseTransferT>(
    option: T,
    prevStateValue?: T[]
) => {
    if (!prevStateValue) return [];

    return prevStateValue.some((item) => item.value === option.value)
        ? prevStateValue.filter((item) => item.value !== option.value)
        : [...prevStateValue, option];
};
