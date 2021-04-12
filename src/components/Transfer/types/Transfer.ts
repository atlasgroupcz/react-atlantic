import { OptionType } from '../../Select';
import { Dispatch, ReactNode, RefObject, SetStateAction } from 'react';
import { Size } from '../../../types';
import { UseTransferPosition } from './UseTransferPositionProps';
import { TransferPosition } from './TransferPosition';
import { UseInnerTransfer } from './UseInnerTransfer';

type SharedTransferProps<T extends OptionType = OptionType> = {
    options: T[];
    onOptionClick?: (option: T) => void;
    setValue?: Dispatch<SetStateAction<T[]>>;
    setOpen?: Dispatch<SetStateAction<boolean>>;
    isOpen?: boolean;
    isDisabled?: boolean;
    noResults?: ReactNode;
    label?: ReactNode;
    leftHeader?: ReactNode;
    leftContainer?: ReactNode;
    rightHeader?: ReactNode;
    rightContainer?: ReactNode;
    footer?: ReactNode;
    hiddenTransferComponent?: ReactNode;
    innerTransferController?: UseInnerTransfer;
    isSorted?: boolean;
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
    preferredPosition?: TransferPosition;
    positionController?: UseTransferPosition;
};

export type TransferProps<
    T extends OptionType<string, string> = OptionType<string, string>
> = SharedTransferProps<T> & {
    value?: T[];
    ref: RefObject<HTMLDivElement>;
} & StyledComponentTransferProps;
