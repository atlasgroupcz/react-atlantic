import { OptionType } from '../../Select';
import { InputProps } from '../../Input';
import { ButtonProps } from '../../Button';
import { PropsWithChildren, ReactNode, RefObject } from 'react';
import { Size } from '../../../types';
import { IconProps } from '../../Icon';

type SharedTransferProps<T extends OptionType = OptionType> = {
    options?: T[];
    onOptionClick?: (option: T) => void;
    label?: ReactNode;
    isOpen?: boolean;
    noResults?: ReactNode;
    isDisabled?: boolean;

    clearInputProps?: InputProps & Pick<IconProps, 'onClick'>;
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

export type StyledComponentTransferProps = {
    size?: Size;
    visibleRows?: number;
    isFullWidth?: boolean;
    customWidth?: {
        leftSide?: string;
        rightSide?: string;
    };
};

export type TransferProps<
    T extends OptionType = OptionType
> = SharedTransferProps<T> & {
    value?: T[];
    ref: RefObject<HTMLDivElement>;
} & StyledComponentTransferProps;
