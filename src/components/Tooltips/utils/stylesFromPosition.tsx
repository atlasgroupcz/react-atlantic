import { CSSPosition } from '../types/CSSPosition';
import { resolveDirectionAndPosition } from './resolveDirectionAndPosition';

export const stylesFromPosition = (
    rect: DOMRect,
    tooltipElement: HTMLDivElement,
    preferredDirection: CSSPosition,
    transition: string,
    padding: number,
    margin: number
): string => {
    const style = resolveDirectionAndPosition(
        rect,
        tooltipElement,
        preferredDirection,
        transition,
        padding,
        margin
    );
    return style;
};
