import { OptionType } from '../../Select';

export const resolveLeftSideOpen = (
    isOpen: boolean,
    value: OptionType<string, string>[] | undefined
) => isOpen && !!value;
