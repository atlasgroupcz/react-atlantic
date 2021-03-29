import { HorizontalPosition } from '../../../types';
import { TransferPosition } from '../types/TransferPosition';

export const resolveLeftRightPosition = (
    componentLeftWidth: number,
    rect: DOMRect,
    resolvedPosition: TransferPosition
): HorizontalPosition => {
    const { left } = rect;
    const endX = left + componentLeftWidth;
    const windowWidth = window.innerWidth;
    const overflowedRight = endX > windowWidth;
    let position: HorizontalPosition = 'left';

    if (!['left', 'right'].includes(resolvedPosition)) {
        if (overflowedRight) {
            position = 'right';
        }
    } else {
        if (resolvedPosition === 'left') position = 'right';
        if (resolvedPosition === 'right') position = 'left';
    }

    return position;
};
