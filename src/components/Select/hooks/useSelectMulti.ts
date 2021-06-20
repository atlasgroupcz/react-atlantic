import { ReactText, useMemo, useState } from 'react';
import {
    ControllerSelectMultiProps,
    OptionType,
    SelectMultiProps,
} from '../types';
import { useOutsideClick } from '../../../hooks/useOutsideClick';

export const useSelectMulti = <
    T extends OptionType<ReactText> = OptionType<ReactText>
>({
    defaultValue,
    isDisabled,
    options,
    ...args
}: ControllerSelectMultiProps<T>): SelectMultiProps<T> => {
    const [values, setValues] = useState<T[] | undefined>(defaultValue);
    const [isOpen, setOpen] = useState<boolean>(false);
    const ref = useOutsideClick<HTMLDivElement>(() => setOpen(false));

    const filteredValues = useMemo(
        () =>
            options?.filter(
                (option) =>
                    !values?.some((value) => value.value === option.value)
            ),
        [options, values]
    );

    const onClick: SelectMultiProps['onClick'] = () => {
        if (!isDisabled && filteredValues && filteredValues.length > 0) {
            setOpen((prev) => !prev);
        }
    };

    const onOptionClick: ControllerSelectMultiProps<T>['onOptionClick'] = (
        option
    ) => {
        if (!isDisabled) {
            const newValues: T[] = values || [];
            newValues.push(option);

            setValues(newValues);
            args.onOptionClick?.(option);
            setOpen(false);
        }
    };

    const onValueClick: ControllerSelectMultiProps<T>['onValueClick'] = (
        option,
        event
    ) => {
        event?.stopPropagation();
        if (!isDisabled) {
            if (Array.isArray(values)) {
                setValues(
                    values.filter(
                        (selectedValue) => selectedValue.value !== option.value
                    )
                );
            }

            args.onValueClick?.(option, event);
        }
    };

    return {
        ...args,
        values,
        options: filteredValues,
        isDisabled,
        isOpen,
        ref,
        onClick,
        onOptionClick,
        onValueClick,
        isOptionSelected: typeof values !== 'undefined' && values.length > 0,
        placeholder: `Vyberte...`,
    };
};
