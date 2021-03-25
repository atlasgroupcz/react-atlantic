import { OptionType } from '../../Select';
import { InputProps } from '../../Input';
import { ButtonProps } from '../../Button';
import { PropsWithChildren, ReactNode, RefObject } from 'react';
import { Size } from '../../../types';
import { IconProps } from '../../Icon';
import { UseTransferPosition } from './UseTransferPositionProps';
import { TransferPosition } from './TransferPosition';

type SharedTransferProps<T extends OptionType = OptionType> = {
    options: T[];
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
    visibleItems?: number;
    isFullWidth?: boolean;
    customWidth?: {
        leftSide?: string;
        rightSide?: string;
    };
    preferredPosition?: TransferPosition;
    positionController?: UseTransferPosition;
};

export type TransferProps<
    T extends OptionType<string, string> = OptionType<string, string>
> = SharedTransferProps<T> & {
    value?: T[];
    ref: RefObject<HTMLDivElement>;
} & StyledComponentTransferProps;
