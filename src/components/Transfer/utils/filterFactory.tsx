import { InputDefaultProps } from '../../Input';
import { OptionType } from '../../Select';

export const filterFactory = (value: InputDefaultProps['value']) => {
    const normalizedValue = (value as string)?.trim().toLowerCase();
    return (option: OptionType<string, string>) => {
        const normalizedOptionLabel = option.label.toLocaleLowerCase();
        return normalizedOptionLabel.includes(normalizedValue);
    };
};
