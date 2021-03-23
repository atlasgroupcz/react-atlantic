import { CSSPosition } from '../types/CSSPosition';

export const resolvePositionDepsOnWindow = (
    { left, right, top, bottom }: DOMRect,
    tooltipElement: HTMLDivElement,
    preferredDirection: CSSPosition
) => {
    switch (preferredDirection) {
        case 'left': {
            if (left - tooltipElement.clientWidth < 0) {
                return 'right';
            }
            return 'left';
            //if fit else return right
        }
        case 'right': {
            if (right + tooltipElement.clientWidth > window.innerWidth) {
                return 'left';
            }
            return 'right';
            //if fit else return left
        }
        case 'bottom': {
            if (bottom + tooltipElement.clientHeight > window.innerHeight) {
                return 'top';
            }
            return 'bottom';
            //if fit else return top
        }
        case 'top': {
            if (top - tooltipElement.clientHeight < 0) {
                return 'bottom';
            }
            return 'top';
            //if fit else return bottom
        }
    }
};
