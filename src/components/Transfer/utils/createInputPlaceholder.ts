import { OptionType } from '../../Select';

export const createInputPlaceholder = <T extends OptionType = OptionType>(
    options?: T[]
) => options?.map(({ label }) => label).join(`, `);
