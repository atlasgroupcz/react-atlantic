import { stylesFromPosition } from './stylesFromPosition';
import { validatePosition } from './validatePosition';

export const attachStyles = (
    tooltipElement: HTMLDivElement,
    viewportPosition: DOMRect,
    preferredPosition: string | null
) => {
    tooltipElement.setAttribute(
        'style',
        stylesFromPosition(
            viewportPosition,
            validatePosition(preferredPosition) ?? 'right'
        )
    );
};
