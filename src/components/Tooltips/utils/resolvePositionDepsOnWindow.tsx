import { CSSPosition } from '../types/CSSPosition';

export const resolvePositionDepsOnWindow = (
    { left, right, top, bottom }: DOMRect,
    tooltipElement: HTMLDivElement,
    preferredDirection: CSSPosition
) => {
    switch (preferredDirection) {
        case 'left':
            return left - tooltipElement.clientWidth < 0 ? 'right' : 'left';
        case 'right':
            return right + tooltipElement.clientWidth > window.innerWidth
                ? 'left'
                : 'right';
        case 'bottom':
            return bottom + tooltipElement.clientHeight > window.innerHeight
                ? 'top'
                : 'bottom';
        case 'top':
            return top - tooltipElement.clientHeight < 0 ? 'bottom' : 'top';
    }
};
