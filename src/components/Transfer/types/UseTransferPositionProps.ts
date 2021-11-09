import { MutableRefObject } from 'react';
import { HorizontalPosition } from '../../../types';
import { OptionType } from '../../Select';
import { TransferProps } from './Transfer';
import { TransferPosition } from './TransferPosition';

export type UseTransferPositionProps = Pick<
    TransferProps<OptionType<string, any>>,
    'preferredPosition' | 'customWidth'
> & {
    rectFromHiddenTransfer: MutableRefObject<DOMRect | null>;
};
export type UseTransferPositionValue = {
    position: TransferPosition;
    leftRight: HorizontalPosition;
};

export type UseTransferPosition = (
    props: UseTransferPositionProps & {
        isLeftSideOpen: boolean;
        isRightSideOpen: boolean;
    }
) => UseTransferPositionValue;
