import { OptionType } from '../../Select';

export const resolveRightSideOpen = (
    isOpen: boolean,
    value: OptionType[] | undefined
): boolean => !!(isOpen && value && value.length > 0);
