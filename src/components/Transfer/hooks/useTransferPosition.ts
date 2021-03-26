import { useLayoutEffect, useRef, useState } from 'react';
import { Position } from '../../../types';
import { UseTransferPosition } from '../types/UseTransferPositionProps';
import { resolvePositionForTransfer, resolveWidthFromString } from '../utils';
import { resolveLeftRightPosition } from '../utils/resolveLeftRightPosition';

export const useTransferPosition: UseTransferPosition = ({
    preferredPosition = 'right',
    isRightSideOpen,
    customWidth,
}) => {
    const refOnTransfer = useRef<HTMLDivElement | null>(null);
    const rectWithoutRightSide = useRef<DOMRect | null>(null);
    //TODO: Maybe ref?
    const [position, setPosition] = useState<Exclude<Position, 'top'>>(
        preferredPosition
    );

    const [leftRight, setLeftRight] = useState<
        Exclude<Position, 'bottom' | 'top'>
    >('left');

    useLayoutEffect(() => {
        let componentFullWidth = 0;
        let componentHalfWidth = 0;
        if (isRightSideOpen) {
            componentFullWidth = resolveWidthFromString(
                customWidth?.rightSide!
            );
            componentHalfWidth = resolveWidthFromString(customWidth?.leftSide!);
        }
        const rect = refOnTransfer.current?.getBoundingClientRect()!;

        if (!isRightSideOpen) {
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
    }, [customWidth, isRightSideOpen, preferredPosition]);

    return { refOnTransfer, position, leftRight };
};
