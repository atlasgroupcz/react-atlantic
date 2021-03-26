import { Position } from '../../../types';
import { RefType } from '../../../types/Ref';
import { TransferProps } from './Transfer.types';

export type UseTransferPositionProps = Pick<
    TransferProps,
    'preferredPosition' | 'customWidth'
>;
export type UseTransferPositionValue = {
    refOnTransfer: RefType<HTMLDivElement | null>;
    position: Exclude<Position, 'top'>;
    leftRight: Exclude<Position, 'bottom' | 'top'>;
};

export type UseTransferPosition = (
    props: UseTransferPositionProps & {
        isLeftSideOpen: boolean;
        isRightSideOpen: boolean;
    }
) => UseTransferPositionValue;
