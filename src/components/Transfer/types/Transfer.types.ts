import { OptionType } from '../../Select';
import { InputProps } from '../../Input';
import { ButtonProps } from '../../Button';
import { PropsWithChildren } from 'react';

type SharedTransferProps<T extends OptionType = OptionType> = {
    options?: T[];
    onOptionClick?: (option: T) => void;
    label?: string;
    isOpen?: boolean;

    inputProps?: InputProps;
    cancelButtonProps?: PropsWithChildren<ButtonProps>;
    submitButtonProps?: PropsWithChildren<ButtonProps>;
    clearButtonProps?: PropsWithChildren<ButtonProps>;
};

export type ControllerTransferProps<
    T extends OptionType = OptionType
> = SharedTransferProps<T> & {
    defaultValue?: T[];
    onSubmit?: (value: T[]) => void;
};

export type TransferProps<
    T extends OptionType = OptionType
> = SharedTransferProps<T> & {
    value?: T[];
};
