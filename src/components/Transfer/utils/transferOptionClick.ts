import { UseTransferOptionT } from '..';

export const transferOptionClick = (
    option: UseTransferOptionT,
    prevStateValue?: UseTransferOptionT[]
) => {
    if (!prevStateValue) return [];

    return prevStateValue.some((item) => item.value === option.value)
        ? prevStateValue.filter((item) => item.value !== option.value)
        : [...prevStateValue, option];
};
