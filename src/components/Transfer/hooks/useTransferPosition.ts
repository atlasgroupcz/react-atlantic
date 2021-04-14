import { useLayoutEffect, useState } from 'react';
import { HorizontalPosition } from '../../../types';
import { TransferPosition } from '../types/TransferPosition';
import { UseTransferPosition } from '../types/UseTransferPositionProps';
import { resolvePositionForTransfer } from '../utils';
import { resolveLeftRightPosition } from '../utils/resolveLeftRightPosition';

export const useTransferPosition: UseTransferPosition = ({
    preferredPosition = 'right',
    isRightSideOpen,
    isLeftSideOpen,
    customWidth,
    rectFromHiddenTransfer,
}) => {
    // const rectWithoutRightSide = useRef<DOMRect | null>(null);
    //TODO: Maybe ref?
    const [position, setPosition] = useState<TransferPosition>(
        preferredPosition
    );
    const [leftRight, setLeftRight] = useState<HorizontalPosition>('left');

    useLayoutEffect(() => {
        const componentFullWidth = parseInt(customWidth?.fullyOpen!);
        const componentHalfWidth = parseInt(customWidth?.partiallyOpen!);
        const rect = rectFromHiddenTransfer?.current!;

        const newPosition = resolvePositionForTransfer(
            componentFullWidth,
            rect,
            preferredPosition
        );
        const newLeftRight = resolveLeftRightPosition(
            componentHalfWidth,
            rect,
            newPosition!
        );

        setLeftRight(newLeftRight);
        if (newPosition !== preferredPosition) {
            setPosition(newPosition!);
        }
    }, [
        customWidth,
        isLeftSideOpen,
        isRightSideOpen,
        preferredPosition,
        rectFromHiddenTransfer,
    ]);

    return { position, leftRight };
};
