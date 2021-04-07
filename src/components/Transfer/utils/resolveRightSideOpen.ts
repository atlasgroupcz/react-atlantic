import { OptionType } from '../../Select';

export const resolveRightSideOpen = (
    isOpen: boolean,
    value: OptionType<string, string>[] | undefined
): boolean => !!(isOpen && value && value.length > 0);
