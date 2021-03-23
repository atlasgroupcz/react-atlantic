import { CSSPosition } from '../types/CSSPosition';
import { calculateOffset } from './calculateOffset';
import { resolveDirectionAndPosition } from './resolveDirectionAndPosition';

const defaultStyles = 'visibility: visible;';
const padding = 5;

export const stylesFromPosition = (
    { left, right, top, bottom, ...rest }: DOMRect,
    tooltipElement: HTMLDivElement,
    preferredDirection: CSSPosition,
    transition: string
): string => {
    const isLeftRight = ['left', 'right'].includes(preferredDirection);
    const isTopBottom = ['top', 'bottom'].includes(preferredDirection);
    const offset = calculateOffset(tooltipElement, preferredDirection);

    const res = resolveDirectionAndPosition(
        { left, right, top, bottom, ...rest },
        tooltipElement,
        preferredDirection,
        transition
    );
    return res;

    let verticalMidpoint = (top + bottom) / 2 - offset;
    let horizontalMidpoint = (left + right) / 2 - offset;

    if (isLeftRight) {
        switch (preferredDirection as 'left' | 'right') {
            case 'left':
                return `right: calc(100% - ${left}px);top: ${verticalMidpoint}px;${defaultStyles}${transition}`;
            case 'right':
                return `left: ${right}px;top: ${verticalMidpoint}px;${defaultStyles}${transition}`;
        }
    }

    if (isTopBottom) {
        const endX = horizontalMidpoint + offset * 2;
        const overflowXRight = window.innerWidth - endX;

        if (horizontalMidpoint <= 0) {
            horizontalMidpoint = padding;
        }

        if (overflowXRight < 0) {
            horizontalMidpoint -= Math.abs(overflowXRight) + padding;
        }

        switch (preferredDirection as 'top' | 'bottom') {
            case 'top':
                return `bottom: calc(100% - ${top}px);left: ${horizontalMidpoint}px;${defaultStyles}${transition}`;
            case 'bottom':
                return `top: ${bottom}px;left: ${horizontalMidpoint}px;${defaultStyles}${transition}`;
        }
    }

    return '';
};
