import { CSSPosition } from '../types/CSSPosition';

export const stylesFromPosition = (
    { left, right, top, bottom }: DOMRect,
    preferredDirection: CSSPosition
): string => {
    const isLeftRight = ['left', 'right'].includes(preferredDirection);
    const isTopBottom = ['top', 'bottom'].includes(preferredDirection);

    if (isLeftRight) {
        const verticalMidpoint = (top + bottom) / 2;

        switch (preferredDirection as 'left' | 'right') {
            case 'left':
                return `right: calc(100% - ${left}px);top: ${verticalMidpoint}px;`;
            case 'right':
                return `left: ${right}px;top: ${verticalMidpoint}px;`;
        }
    }

    if (isTopBottom) {
        const horizontalMidpoint = (left + right) / 2;

        switch (preferredDirection as 'top' | 'bottom') {
            case 'top':
                return `bottom: calc(100% - ${top}px);left: ${horizontalMidpoint}px;`;
            case 'bottom':
                return `top: ${bottom}px;left: ${horizontalMidpoint}px;`;
        }
    }

    return '';
};
