import { Size } from '../../../types';
import { OptionType } from '../../Select';

export type TransferCommonItemProps = {
    onClick?: React.MouseEventHandler<HTMLElement>;
    option: OptionType<string, string>;
    size: Size;
    isChecked?: boolean;
};

export type TransferLeftSideItemProps = {} & TransferCommonItemProps;

export type TransferRightSideItemProps = {} & TransferCommonItemProps;
