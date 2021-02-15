import { InputProps, useInputChange } from '../../Input';
import { ControllerTransferProps, TransferProps } from '../types';
import { OptionType } from '../../Select';
import { useRef, useState } from 'react';
import { ButtonProps } from '../../Button';

export const useTransfer = <T extends OptionType = OptionType>({
    options,
    defaultValue,
    ...args
}: ControllerTransferProps<T>): TransferProps<T> => {
    const inputProps = useInputChange({});

    const [isOpen, setOpen] = useState<boolean>(false);

    const onFocus: InputProps['onFocus'] = (e) => {
        setOpen(true);
        inputProps.onFocus?.(e);
    };

    const [value, setValue] = useState<T[]>(defaultValue || []);
    const lastValid = useRef<T[]>(value);

    const sortedOptions = sortOptions(
        options?.filter((option) =>
            option.label
                .toLowerCase()
                .includes((inputProps.value as string)?.toLowerCase())
        ) || []
    );

    const onOptionClick: ControllerTransferProps<T>['onOptionClick'] = (
        option
    ) =>
        setValue((prev) =>
            prev.some((item) => item.value === option.value)
                ? prev.filter((item) => item.value !== option.value)
                : [...prev, option]
        );

    const resetToInitialState = () => setValue(lastValid.current);

    const onCancel: ButtonProps['onClick'] = (e) => {
        setOpen(false);
        resetToInitialState();
        args.cancelButtonProps?.onClick?.(e);
    };

    const onSubmit: ButtonProps['onClick'] = (e) => {
        setOpen(false);
        args.submitButtonProps?.onClick?.(e);
        args.onSubmit?.(value);
        lastValid.current = value;
    };

    const onClear: ButtonProps['onClick'] = (e) => {
        setValue([]);
        args.clearButtonProps?.onClick?.(e);
    };

    const sortedValue = sortOptions(value);

    return {
        options: sortedOptions,
        value: sortedValue,
        onOptionClick,
        isOpen,
        label: args.label || `Vybráno: ${value.length} z ${options?.length}`,
        inputProps: {
            placeholder: `Vyberte...`,
            ...inputProps,
            onFocus,
        },
        cancelButtonProps: {
            children: `Zavřít`,
            ...args.cancelButtonProps,
            onClick: onCancel,
        },
        submitButtonProps: {
            children: `Potvrdit`,
            ...args.submitButtonProps,
            onClick: onSubmit,
        },
        clearButtonProps: {
            children: `Odstranit vše`,
            onClick: onClear,
            ...args.clearButtonProps,
        },
    };
};

const sortOptions = <T extends OptionType = OptionType>(options: T[]) =>
    options.sort((a, b) =>
        a.label.toString().localeCompare(b.label.toString())
    );
