import { DEFAULT_POSITION } from '../constants/DEFAULT_POSITION';
import { stylesFromPosition } from './stylesFromPosition';
import { validatePosition } from './validatePosition';

export const attachStyles = (
    tooltipElement: HTMLDivElement,
    viewportPosition: DOMRect,
    preferredPosition: string | null,
    transition: string,
    padding: number,
    margin: number
) => {
    const position = validatePosition(preferredPosition) ?? DEFAULT_POSITION;

    requestAnimationFrame(() => {
        tooltipElement.setAttribute(
            'style',
            stylesFromPosition(
                viewportPosition,
                tooltipElement,
                position,
                transition,
                padding,
                margin
            )
        );
    });
};
