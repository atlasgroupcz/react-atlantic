import { InputProps, useInputChange } from '../../Input';
import { ControllerTransferProps, TransferProps } from '../types';
import { OptionType } from '../../Select';
import { useState } from 'react';
import { ButtonProps } from '../../Button';

export const useTransfer = <T extends OptionType = OptionType>(
    args: ControllerTransferProps<T>
): TransferProps => {
    const inputProps = useInputChange({});
    const [isOpen, setOpen] = useState<boolean>(false);

    const onFocus: InputProps['onFocus'] = (e) => {
        setOpen(true);
        inputProps.onFocus?.(e);
    };

    const [_value, setValue] = useState<T[]>(args.value || []);

    const options = sortOptions(
        args.options?.filter((option) =>
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

    const resetToInitialState = () => setValue(args.value || []);

    const onCancel: ButtonProps['onClick'] = (e) => {
        setOpen(false);
        resetToInitialState();
        args.cancelButtonProps?.onClick?.(e);
    };

    const onSubmit: ButtonProps['onClick'] = (e) => {
        setOpen(false);
        args.submitButtonProps?.onClick?.(e);
    };

    const onClear: ButtonProps['onClick'] = (e) => {
        setOpen(false);
        setValue([]);
        args.clearButtonProps?.onClick?.(e);
    };

    const value = sortOptions(_value);
    return {
        options,
        value,
        onOptionClick,
        isOpen,
        label: args.label || `selected: ${value.length} / ${options.length}`,
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

const sortOptions = (options: OptionType[]) =>
    options.sort((a, b) =>
        a.label.toString().localeCompare(b.label.toString())
    );
