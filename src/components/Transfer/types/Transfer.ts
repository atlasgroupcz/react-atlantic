import { OptionType } from '../../Select';
import { Dispatch, ReactNode, RefObject, SetStateAction } from 'react';
import { CommonHTMLProps, Size } from '../../../types';
import { UseTransferPosition } from './UseTransferPositionProps';
import { TransferPosition } from './TransferPosition';
import { UseInnerTransfer } from './UseInnerTransfer';
import { UseTransferT } from '../hooks/useTransfer';

export type TransferComponentsProps = {
    hiddenTransferComponent?: ReactNode;
    leftHeader?: ReactNode;
    leftContainer?: ReactNode;
    rightHeader?: ReactNode;
    rightContainer?: ReactNode;
    footer?: ReactNode;
    noResults?: ReactNode;
    label?: ReactNode;
};

type SharedTransferProps<T extends OptionType> = {
    options: T[];
    onOptionClick?: (option: T) => void;
    value?: T[];
    setValue?: Dispatch<SetStateAction<T[]>>;
    setOpen?: Dispatch<SetStateAction<boolean>>;
    isOpen?: boolean;
    isDisabled?: boolean;
    isSorted?: boolean;
    innerTransferController?: UseInnerTransfer;
} & TransferComponentsProps;

export type ControllerTransferProps<T extends OptionType> = SharedTransferProps<
    T
> & {
    defaultValue?: T[];
};

export type StyledComponentTransferProps = {
    size?: Size;
    visibleRows?: number;
    isFullWidth?: boolean;
    customWidth?: {
        partiallyOpen?: string;
        fullyOpen?: string;
    };
    preferredPosition?: TransferPosition;
    positionController?: UseTransferPosition;
};

export type TransferProps<T extends UseTransferT> = SharedTransferProps<T> & {
    ref: RefObject<HTMLDivElement>;
} & StyledComponentTransferProps &
    Omit<CommonHTMLProps, 'ref'>;
