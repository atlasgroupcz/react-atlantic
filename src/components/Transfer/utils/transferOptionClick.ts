import { OptionType } from '../../Select';

export const transferOptionClick = <T extends OptionType>(
    option: T,
    prevStateValue?: T[]
) => {
    if (!prevStateValue) return [];

    return prevStateValue.some((item) => item.value === option.value)
        ? prevStateValue.filter((item) => item.value !== option.value)
        : [...prevStateValue, option];
};
