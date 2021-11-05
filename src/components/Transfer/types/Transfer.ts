import { Dispatch, ReactNode, RefObject, SetStateAction } from 'react';
import { CommonHTMLProps, Size } from '../../../types';
import { UseTransferPosition } from './UseTransferPositionProps';
import { TransferPosition } from './TransferPosition';
import { UseInnerTransfer } from './UseInnerTransfer';

export type UseTransferOptionT = {
    value: string;
    label: string | React.ReactElement;
};

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

type SharedTransferProps = {
    options: UseTransferOptionT[];
    onOptionClick?: (option: UseTransferOptionT) => void;
    value?: UseTransferOptionT[];
    setValue?: Dispatch<SetStateAction<UseTransferOptionT[]>>;
    setOpen?: Dispatch<SetStateAction<boolean>>;
    isOpen?: boolean;
    isDisabled?: boolean;
    isSorted?: boolean;
    innerTransferController?: UseInnerTransfer;
} & TransferComponentsProps;

export type ControllerTransferProps = SharedTransferProps & {
    defaultValue?: UseTransferOptionT[];
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

export type TransferProps = SharedTransferProps & {
    ref: RefObject<HTMLDivElement>;
} & StyledComponentTransferProps &
    Omit<CommonHTMLProps, 'ref'>;
