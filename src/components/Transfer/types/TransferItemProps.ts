import { UseTransferOptionT } from '.';
import { Size } from '../../../types';

export type TransferCommonItemProps = {
    onClick?: React.MouseEventHandler<HTMLElement>;
    option: UseTransferOptionT;
    size: Size;
    isChecked?: boolean;
};

export type TransferLeftSideItemProps = {} & TransferCommonItemProps;

export type TransferRightSideItemProps = {} & TransferCommonItemProps;
