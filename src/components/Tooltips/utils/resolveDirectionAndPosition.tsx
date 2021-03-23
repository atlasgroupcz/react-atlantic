import { CSSPosition } from '../types/CSSPosition';

const defaultStyles = 'visibility: visible;';
const PADDING = 5;

const resolvePositionDepsOnWindow = (
    { left, right, top, bottom }: DOMRect,
    tooltipElement: HTMLDivElement,
    preferredDirection: CSSPosition
) => {
    switch (preferredDirection) {
        case 'left': {
            if (left - tooltipElement.clientWidth < 0) {
                return 'right';
            }
            return 'left';
            //if fit else return right
        }
        case 'right': {
            if (right + tooltipElement.clientWidth > window.innerWidth) {
                return 'left';
            }
            return 'right';
            //if fit else return left
        }
        case 'bottom': {
            if (bottom + tooltipElement.clientHeight > window.innerHeight) {
                return 'top';
            }
            return 'bottom';
            //if fit else return top
        }
        case 'top': {
            if (top - tooltipElement.clientHeight < 0) {
                return 'bottom';
            }
            return 'top';
            //if fit else return bottom
        }
    }
};

const adjustVerticalMidpoint = (
    verticalMidpoint: number,
    tooltipTop: number,
    tooltipBottom: number,
    padding: number = PADDING
) => {
    const isOverflowTop = tooltipTop < 0;
    const isOverflowBottom = tooltipBottom > window.innerHeight;
    let topValue = verticalMidpoint;

    if (isOverflowTop) {
        topValue = padding;
    }
    if (isOverflowBottom) {
        const overflowBottom = window.innerHeight - tooltipBottom;
        const subValue = Math.abs(overflowBottom) + padding;
        topValue -= subValue;
    }

    return topValue;
};

const adjustHorizontalMidpoint = (
    horizontalMidpoint: number,
    tooltipRight: number,
    tooltipLeft: number,
    padding: number = PADDING
) => {
    const isOverflowRight = tooltipRight > window.innerWidth;
    const isOverflowLeft = tooltipLeft < 0;
    let leftValue = horizontalMidpoint;

    if (isOverflowLeft) {
        leftValue = padding;
    }
    if (isOverflowRight) {
        const overflowRight = window.innerWidth - tooltipRight;
        const subValue = Math.abs(overflowRight) + padding;
        leftValue -= subValue;
    }
    return leftValue;
};

export const resolveDirectionAndPosition = (
    { left, right, top, bottom, ...rest }: DOMRect,
    tooltipElement: HTMLDivElement,
    preferredDirection: CSSPosition,
    transition: string
): string => {
    const position = resolvePositionDepsOnWindow(
        { left, right, top, bottom, ...rest },
        tooltipElement,
        preferredDirection
    );
    const offsetVertical = tooltipElement.clientHeight / 2;
    const offsetHorizontal = tooltipElement.clientWidth / 2;

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
                tooltipBottom
            );
            return `left: ${leftValue}px;top: ${topValue}px;${defaultStyles}${transition}`;
        }

        case 'right': {
            //adjust verticalMidpoint
            const topValue = adjustVerticalMidpoint(
                verticalMidpoint,
                tooltipTop,
                tooltipBottom
            );
            return `left: ${right}px;top: ${topValue}px;${defaultStyles}${transition}`;
        }
        case 'top': {
            //adjust horizontalMidpoint
            const leftValue = adjustHorizontalMidpoint(
                horizontalMidpoint,
                tooltipRight,
                tooltipLeft
            );
            return `bottom: calc(100% - ${top}px);left: ${leftValue}px;${defaultStyles}${transition}`;
        }
        case 'bottom': {
            //adjust horizontalMidpoint;
            const leftValue = adjustHorizontalMidpoint(
                horizontalMidpoint,
                tooltipRight,
                tooltipLeft
            );
            return `top: ${bottom}px;left: ${leftValue}px;${defaultStyles}${transition}`;
        }
    }
};
