import { Position } from '../../../types';
import { OptionType } from '../../Select';
import { TransferProps } from './Transfer';

// TODO: Fix onOptionClick type
export type TransferLeftSideProps<T extends OptionType = OptionType> = {
    isLeftSideOpen?: boolean;
    isRightSideOpen?: boolean;
    position: Position;
    isValue?: boolean;
} & Pick<
    TransferProps,
    | 'noResults'
    | 'size'
    | 'isDisabled'
    | 'isFullWidth'
    | 'leftHeader'
    | 'leftContainer'
>;
