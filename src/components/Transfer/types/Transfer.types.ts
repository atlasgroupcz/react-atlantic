import { PropsWithoutChildren } from '../../../types';
import { OptionType } from '../../Select';
import { InputProps } from '../../Input';
import { ButtonProps } from '../../Button';
import { PropsWithChildren } from 'react';

export type ControllerTransferProps<T extends OptionType = OptionType> = {
    options?: T[];
    value?: T[];
    onOptionClick?: (option: T) => void;
    inputProps?: InputProps;
    cancelButtonProps?: PropsWithChildren<ButtonProps>;
    submitButtonProps?: PropsWithChildren<ButtonProps>;
    clearButtonProps?: PropsWithChildren<ButtonProps>;
    label?: string;
    isOpen?: boolean;
    defaultValue?: T[];
};

export type TransferProps<
    T extends OptionType = OptionType
> = PropsWithoutChildren<Omit<ControllerTransferProps<T>, 'defaultValue'>>;
