import { CSSPosition } from '../types/CSSPosition';

export const resolvePositionDepsOnWindow = (
    { left, right, top, bottom }: DOMRect,
    tooltipElement: HTMLDivElement,
    preferredDirection: CSSPosition
) => {
    switch (preferredDirection) {
        case 'left':
            return left - tooltipElement.clientWidth < 0 ? 'right' : 'left';
        //if fit else return right
        case 'right':
            return right + tooltipElement.clientWidth > window.innerWidth
                ? 'left'
                : 'right';

        //if fit else return left
        case 'bottom':
            return bottom + tooltipElement.clientHeight > window.innerHeight
                ? 'top'
                : 'bottom';
        //if fit else return top
        case 'top':
            return top - tooltipElement.clientHeight < 0 ? 'bottom' : 'top';

        //if fit else return bottom
    }
};
