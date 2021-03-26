import { useLayoutEffect, useRef, useState } from 'react';
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
}) => {
    const refOnTransfer = useRef<HTMLDivElement | null>(null);
    const rectWithoutRightSide = useRef<DOMRect | null>(null);
    //TODO: Maybe ref?
    const [position, setPosition] = useState<TransferPosition>(
        preferredPosition
    );

    const [leftRight, setLeftRight] = useState<HorizontalPosition>('left');

    useLayoutEffect(() => {
        const componentFullWidth = parseInt(customWidth?.rightSide!);
        const componentHalfWidth = parseInt(customWidth?.leftSide!);
        const rect = refOnTransfer.current?.getBoundingClientRect()!;

        if (!isRightSideOpen && !isLeftSideOpen) {
            rectWithoutRightSide.current = rect;
        }

        const newPosition = resolvePositionForTransfer(
            componentFullWidth,
            rectWithoutRightSide.current!,
            preferredPosition
        );
        const newLeftRight = resolveLeftRightPosition(
            componentHalfWidth,
            rectWithoutRightSide.current!
        );

        setLeftRight(newLeftRight);
        if (newPosition !== preferredPosition) {
            setPosition(newPosition!);
        }
    }, [customWidth, isLeftSideOpen, isRightSideOpen, preferredPosition]);

    return { refOnTransfer, position, leftRight };
};
