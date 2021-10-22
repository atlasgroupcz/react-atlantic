import { Size } from '../../../types';
import { UseTransferT } from '../hooks/useTransfer';

export type TransferCommonItemProps = {
    onClick?: React.MouseEventHandler<HTMLElement>;
    option: UseTransferT;
    size: Size;
    isChecked?: boolean;
};

export type TransferLeftSideItemProps = {} & TransferCommonItemProps;

export type TransferRightSideItemProps = {} & TransferCommonItemProps;
