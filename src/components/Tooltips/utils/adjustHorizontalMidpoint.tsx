export const adjustHorizontalMidpoint = (
    horizontalMidpoint: number,
    tooltipRight: number,
    tooltipLeft: number,
    padding: number
) => {
    const width = window.innerWidth - padding;
    const isOverflowRight = tooltipRight > width;
    const isOverflowLeft = tooltipLeft < padding;
    let leftValue = horizontalMidpoint;

    if (isOverflowLeft) {
        leftValue = padding;
    }
    if (isOverflowRight) {
        const overflowRight = width - tooltipRight;
        const subValue = Math.abs(overflowRight);
        leftValue -= subValue;
    }
    return leftValue;
};
