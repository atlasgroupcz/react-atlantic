import { Position } from '../../../types';
import { OptionType } from '../../Select';
import { TransferProps } from './Transfer';

// TODO: Fix onOptionClick type
export type TransferLeftSideProps<T extends OptionType = OptionType> = {
    isLeftSideOpen?: boolean;
    isRightSideOpen?: boolean;
    onOptionClick: any;
    position: Position;
} & Pick<
    TransferProps,
    | 'options'
    | 'value'
    | 'clearInputProps'
    | 'noResults'
    | 'size'
    | 'visibleRows'
    | 'isDisabled'
    | 'isFullWidth'
    | 'leftHeader'
    | 'leftContainer'
>;
