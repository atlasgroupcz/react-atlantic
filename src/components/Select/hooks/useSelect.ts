import { ControllerSelectProps, OptionType, SelectProps } from '../types';
import { useState } from 'react';
import { useOutsideClick } from '../../../hooks/useOutsideClick';

export const useSelect = <T extends OptionType = OptionType>({
    defaultValue,
    isDisabled,
    ...args
}: ControllerSelectProps<T>): SelectProps<T> => {
    const [value, setValue] = useState<T | undefined>(defaultValue);
    const [isOpen, setOpen] = useState<boolean>(false);
    const ref = useOutsideClick<HTMLDivElement>(() => setOpen(false));

    const onClick: SelectProps['onClick'] = () => {
        if (!isDisabled) {
            setOpen(true);
        }
    };

    const onOptionClick: ControllerSelectProps<T>['onOptionClick'] = (
        option
    ) => {
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
        placeholder: `Vyberte...`,
    };
};
