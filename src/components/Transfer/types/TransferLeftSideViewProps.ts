import { Position } from '../../../types';
import { OptionType } from '../../Select';
import { TransferProps } from './Transfer';

// TODO: Fix onOptionClick type
export type TransferLeftSideViewProps<T extends OptionType = OptionType> = {
    isLeftSideOpen?: boolean;
    isRightSideOpen?: boolean;
    position: Position;
} & Pick<
    TransferProps<OptionType<string, any>>,
    | 'noResults'
    | 'size'
    | 'isDisabled'
    | 'isFullWidth'
    | 'leftHeader'
    | 'leftContainer'
>;
