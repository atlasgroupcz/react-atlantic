import { MutableRefObject } from 'react';
import { HorizontalPosition } from '../../../types';
import { TransferProps } from './Transfer';
import { TransferPosition } from './TransferPosition';

export type UseTransferPositionProps = Pick<
    TransferProps,
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
