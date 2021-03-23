import { CSSPosition } from '../types/CSSPosition';
import { adjustHorizontalMidpoint } from './adjustHorizontalMidpoint';
import { adjustVerticalMidpoint } from './adjustVerticalMidpoint';
import { resolvePositionDepsOnWindow } from './resolvePositionDepsOnWindow';

const defaultStyles = 'visibility: visible;';

export const resolveDirectionAndPosition = (
    rect: DOMRect,
    tooltipElement: HTMLDivElement,
    preferredDirection: CSSPosition,
    transition: string,
    padding: number
): string => {
    const position = resolvePositionDepsOnWindow(
        rect,
        tooltipElement,
        preferredDirection
    );
    const offsetVertical = tooltipElement.clientHeight / 2;
    const offsetHorizontal = tooltipElement.clientWidth / 2;

    const { left, right, top, bottom } = rect;
    const tooltipCenterX = (left + right) / 2;
    const tooltipCenterY = (top + bottom) / 2;

    const verticalMidpoint = tooltipCenterY - offsetVertical;
    const horizontalMidpoint = tooltipCenterX - offsetHorizontal;

    const tooltipRight = tooltipCenterX + offsetHorizontal;
    const tooltipLeft = tooltipCenterX - offsetHorizontal;
    const tooltipTop = tooltipCenterY - offsetVertical;
    const tooltipBottom = tooltipCenterY + offsetVertical;

    switch (position) {
        case 'left': {
            //adjust verticalMidpoint
            const leftValue = left - offsetHorizontal * 2;
            const topValue = adjustVerticalMidpoint(
                verticalMidpoint,
                tooltipTop,
                tooltipBottom,
                padding
            );
            return `left: ${leftValue}px;top: ${topValue}px;${defaultStyles}${transition}`;
        }

        case 'right': {
            //adjust verticalMidpoint
            const topValue = adjustVerticalMidpoint(
                verticalMidpoint,
                tooltipTop,
                tooltipBottom,
                padding
            );
            return `left: ${right}px;top: ${topValue}px;${defaultStyles}${transition}`;
        }
        case 'top': {
            //adjust horizontalMidpoint
            const leftValue = adjustHorizontalMidpoint(
                horizontalMidpoint,
                tooltipRight,
                tooltipLeft,
                padding
            );
            return `bottom: calc(100% - ${top}px);left: ${leftValue}px;${defaultStyles}${transition}`;
        }
        case 'bottom': {
            //adjust horizontalMidpoint;
            const leftValue = adjustHorizontalMidpoint(
                horizontalMidpoint,
                tooltipRight,
                tooltipLeft,
                padding
            );
            return `top: ${bottom}px;left: ${leftValue}px;${defaultStyles}${transition}`;
        }
    }
};
