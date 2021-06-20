import { ControllerSelectProps, OptionType, SelectProps } from '../types';
import { ReactText, useState } from 'react';
import { useOutsideClick } from '../../../hooks/useOutsideClick';

export const useSelect = <
    T extends OptionType<ReactText> = OptionType<ReactText>
>({
    defaultValue,
    isDisabled,
    ...args
}: ControllerSelectProps<T>): SelectProps<T> => {
    const [value, setValue] = useState<T | undefined>(defaultValue);
    const [isOpen, setOpen] = useState<boolean>(false);
    const ref = useOutsideClick<HTMLDivElement>(() => setOpen(false));

    const onClick: SelectProps['onClick'] = () => {
        if (!isDisabled) {
            setOpen((prev) => !prev);
        }
    };

    const onOptionClick: SelectProps<T>['onOptionClick'] = (option) => {
        if (!isDisabled) {
            setValue(option);
            args.onOptionClick?.(option);
            setOpen(false);
        }
    };

    return {
        ...args,
        onClick,
        value,
        onOptionClick,
        isOpen,
        isDisabled,
        ref,
        isOptionSelected: !!value,
        placeholder: `Vyberte...`,
    };
};
