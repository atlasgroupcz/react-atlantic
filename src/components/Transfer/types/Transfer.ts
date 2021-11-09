import { Dispatch, ReactNode, RefObject, SetStateAction } from 'react';
import { CommonHTMLProps, Size } from '../../../types';
import { UseTransferPosition } from './UseTransferPositionProps';
import { TransferPosition } from './TransferPosition';
import { UseInnerTransfer } from './UseInnerTransfer';
import { OptionType } from '../../Select/types';
import { InputDefaultProps } from '../../Input';

export type TranferValue = OptionType<string, string>;

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

type SharedTransferProps<T extends TranferValue = TranferValue> = {
    options: T[];
    onOptionClick?: (option: T) => void;
    value?: T[];
    setValue?: Dispatch<SetStateAction<T[]>>;
    setOpen?: Dispatch<SetStateAction<boolean>>;
    isOpen?: boolean;
    isDisabled?: boolean;
    isSorted?: boolean;
    innerTransferController?: UseInnerTransfer;
    filterFactory?: (value: InputDefaultProps['value']) => any;
    createInputPlaceholder?: (
        options?: TranferValue[] | undefined
    ) => string | undefined;
    sortTransferOptions?: (options: T[], term: string) => T[];
    transferOptionClick?: (option: T, prevStateValue?: T[] | undefined) => T[];
} & TransferComponentsProps;

export type ControllerTransferProps<
    T extends TranferValue = TranferValue
> = SharedTransferProps<T> & {
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

export type TransferProps<
    T extends TranferValue = TranferValue
> = SharedTransferProps<T> & {
    ref: RefObject<HTMLDivElement>;
} & StyledComponentTransferProps &
    Omit<CommonHTMLProps, 'ref'>;
