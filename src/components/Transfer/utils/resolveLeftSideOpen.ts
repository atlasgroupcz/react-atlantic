import { OptionType } from '../../Select';

export const resolveLeftSideOpen = (
    isOpen: boolean,
    value: OptionType[] | undefined
) => isOpen && !!value;
