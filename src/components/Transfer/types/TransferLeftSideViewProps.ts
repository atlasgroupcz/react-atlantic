import { Position } from '../../../types';
import { TransferProps } from './Transfer';

export type TransferLeftSideViewProps = {
    isLeftSideOpen?: boolean;
    isRightSideOpen?: boolean;
    position: Position;
} & Pick<
    TransferProps,
    | 'noResults'
    | 'size'
    | 'isDisabled'
    | 'isFullWidth'
    | 'leftHeader'
    | 'leftContainer'
>;
