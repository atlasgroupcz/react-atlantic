export const adjustVerticalMidpoint = (
    verticalMidpoint: number,
    tooltipTop: number,
    tooltipBottom: number,
    padding: number
) => {
    const isOverflowTop = tooltipTop < padding;
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
