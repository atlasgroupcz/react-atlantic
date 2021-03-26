import { useLayoutEffect, useRef, useState } from 'react';
import { Position } from '../../../types';
import { UseTransferPosition } from '../types/UseTransferPositionProps';
import { resolvePositionForTransfer, resolveWidthFromString } from '../utils';

export const useTransferPosition: UseTransferPosition = ({
    preferredPosition = 'right',
    isLeftSideOpen,
    isRightSideOpen,
    customWidth,
}) => {
    const refOnTransfer = useRef<HTMLDivElement | null>(null);
    const rectWithoutRightSide = useRef<DOMRect | null>(null);
    //TODO: Maybe ref?
    const [position, setPosition] = useState<Position>(preferredPosition);

    useLayoutEffect(() => {
        let componentWidth = 0;
        if (isRightSideOpen) {
            componentWidth = resolveWidthFromString(customWidth?.rightSide!);
        }
        const rect = refOnTransfer.current?.getBoundingClientRect()!;

        if (!isRightSideOpen) {
            rectWithoutRightSide.current = rect;
        }

        const newPosition = resolvePositionForTransfer(
            componentWidth,
            rectWithoutRightSide.current!,
            preferredPosition
        );

        if (newPosition !== preferredPosition) {
            setPosition(newPosition);
        }
    }, [customWidth, isRightSideOpen, preferredPosition]);

    return { refOnTransfer, position };
};
