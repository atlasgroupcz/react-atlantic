import { ReactText, useMemo, useState } from 'react';
import {
    ControllerSelectMultiProps,
    OptionType,
    SelectMultiOptionOptionType,
    SelectMultiProps,
} from '../types';
import { useOutsideClick } from '../../../hooks/useOutsideClick';

export const useSelectMulti = <
    O extends SelectMultiOptionOptionType = SelectMultiOptionOptionType,
    V extends OptionType<ReactText> = OptionType<ReactText>
>({
    defaultValue,
    isDisabled,
    options,
    ...args
}: ControllerSelectMultiProps<O, V>): SelectMultiProps<O, V> => {
    const [values, setValues] = useState<V[] | undefined>(defaultValue);
    const [isOpen, setOpen] = useState<boolean>(false);
    const ref = useOutsideClick<HTMLDivElement>(() => setOpen(false));

    const onClick: SelectMultiProps['onClick'] = () => {
        if (!isDisabled) {
            setOpen((prev) => !prev);
        }
    };

    const onClear: SelectMultiProps['onClear'] = (event) => {
        if (!isDisabled) {
            event.stopPropagation();
            setValues([]);
            setOpen(false);
        }
    };

    const onValueClick: ControllerSelectMultiProps<O, V>['onValueClick'] = (
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

    const onOptionClick: ControllerSelectMultiProps<O, V>['onOptionClick'] = (
        option,
        event
    ) => {
        if (!isDisabled) {
            if (option.isSelected) {
                onValueClick?.((option as unknown) as V, event);
            } else {
                const newValues: V[] = values || [];
                newValues.push((option as unknown) as V);
                setValues(newValues);
            }
            args.onOptionClick?.(option, event);
            setOpen(false);
        }
    };

    return {
        ...args,
        values,
        options: options?.map((option) => ({
            ...option,
            isSelected:
                values?.some((value) => value.value === option.value) || false,
        })),
        isDisabled,
        isOpen,
        ref,
        onClick,
        onOptionClick,
        onValueClick,
        isOptionSelected: typeof values !== 'undefined' && values.length > 0,
        placeholder: `Vyberte...`,
        onClear,
    };
};
