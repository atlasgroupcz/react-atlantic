import { TransferProps } from '../types';

export const resolvePositionForTransfer = (
    componentWidth: number,
    rect: DOMRect,
    prefPosition: TransferProps['preferredPosition']
): TransferProps['preferredPosition'] => {
    const { left } = rect;
    const endX = left + componentWidth;
    const startX = left - componentWidth / 2;
    const windowWidth = window.innerWidth;

    const overflowedRight = endX > windowWidth;
    const overflowedLeft = startX < 0;

    let newPosition = prefPosition!;

    let c = 0;
    if (newPosition === 'right' && overflowedRight) {
        newPosition = 'left';
        c++;
    }

    if (newPosition === 'left' && overflowedLeft) {
        newPosition = 'right';
        c++;
    }

    //TODO: check bottom else ERROR!
    if (c === 2) {
        newPosition = 'bottom';
    }

    return newPosition;
};
