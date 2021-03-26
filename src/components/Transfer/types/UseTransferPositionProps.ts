import { HorizontalPosition } from '../../../types';
import { RefType } from '../../../types/Ref';
import { TransferProps } from './Transfer.types';
import { TransferPosition } from './TransferPosition';

export type UseTransferPositionProps = Pick<
    TransferProps,
    'preferredPosition' | 'customWidth'
>;
export type UseTransferPositionValue = {
    refOnTransfer: RefType<HTMLDivElement | null>;
    position: TransferPosition;
    leftRight: HorizontalPosition;
};

export type UseTransferPosition = (
    props: UseTransferPositionProps & {
        isLeftSideOpen: boolean;
        isRightSideOpen: boolean;
    }
) => UseTransferPositionValue;
