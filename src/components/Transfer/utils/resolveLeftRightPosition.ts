import { HorizontalPosition } from '../../../types';

export const resolveLeftRightPosition = (
    componentLeftWidth: number,
    rect: DOMRect
): HorizontalPosition => {
    const { left } = rect;
    const endX = left + componentLeftWidth;
    const windowWidth = window.innerWidth;
    const overflowedRight = endX > windowWidth;
    let position: HorizontalPosition = 'left';
    if (overflowedRight) {
        position = 'right';
    }
    return position;
};
