import { OptionType } from '../../Select';

export const sortTransferOptions = <T extends OptionType<string, string>>(
    options: T[]
) =>
    options.sort((a, b) =>
        a.label.toString().localeCompare(b.label.toString())
    );
