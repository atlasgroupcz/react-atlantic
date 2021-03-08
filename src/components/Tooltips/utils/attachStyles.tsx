import { DEFAULT_POSITION } from '../constants/DEFAULT_POSITION';
import { CSSPosition } from '../types/CSSPosition';
import { stylesFromPosition } from './stylesFromPosition';
import { validatePosition } from './validatePosition';

const calculateOffset = (el: HTMLElement, position: CSSPosition) => {
    const isLeftRight = ['left', 'right'].includes(position);

    if (isLeftRight) return el.clientHeight / 2;
    return el.clientWidth / 2;
};

export const attachStyles = (
    tooltipElement: HTMLDivElement,
    viewportPosition: DOMRect,
    preferredPosition: string | null,
    transition: string
) => {
    const position = validatePosition(preferredPosition) ?? DEFAULT_POSITION;
    tooltipElement.setAttribute(
        'style',
        stylesFromPosition(viewportPosition, 0, position, transition)
    );

    requestAnimationFrame(() => {
        tooltipElement.setAttribute(
            'style',
            stylesFromPosition(
                viewportPosition,
                calculateOffset(tooltipElement, position),
                position,
                transition
            )
        );
    });
};
