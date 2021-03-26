import { Position } from '../../../types';

export const resolveLeftRightPosition = (
    componentLeftWidth: number,
    rect: DOMRect
): Exclude<Position, 'bottom' | 'top'> => {
    const { left } = rect;
    const endX = left + componentLeftWidth;
    const windowWidth = window.innerWidth;
    const overflowedRight = endX > windowWidth;
    let position: Exclude<Position, 'bottom' | 'top'> = 'left';
    if (overflowedRight) {
        position = 'right';
    }
    return position;
};
