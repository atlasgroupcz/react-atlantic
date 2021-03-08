import { CSSPosition } from '../types/CSSPosition';

const defaultStyles = 'visibility: visible;';

export const stylesFromPosition = (
    { left, right, top, bottom }: DOMRect,
    offset: number,
    preferredDirection: CSSPosition,
    transition: string
): string => {
    const isLeftRight = ['left', 'right'].includes(preferredDirection);
    const isTopBottom = ['top', 'bottom'].includes(preferredDirection);

    if (isLeftRight) {
        const verticalMidpoint = (top + bottom) / 2 - offset;

        switch (preferredDirection as 'left' | 'right') {
            case 'left':
                return `right: calc(100% - ${left}px);top: ${verticalMidpoint}px;${defaultStyles}${transition}`;
            case 'right':
                return `left: ${right}px;top: ${verticalMidpoint}px;${defaultStyles}${transition}`;
        }
    }

    if (isTopBottom) {
        const horizontalMidpoint = (left + right) / 2 - offset;

        switch (preferredDirection as 'top' | 'bottom') {
            case 'top':
                return `bottom: calc(100% - ${top}px);left: ${horizontalMidpoint}px;${defaultStyles}${transition}`;
            case 'bottom':
                return `top: ${bottom}px;left: ${horizontalMidpoint}px;${defaultStyles}${transition}`;
        }
    }

    return '';
};
