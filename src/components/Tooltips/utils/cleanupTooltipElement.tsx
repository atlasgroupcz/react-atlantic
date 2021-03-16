export const cleanupTooltipElement = (tooltipElement: HTMLDivElement) => {
    tooltipElement.innerText = '';
    requestAnimationFrame(() => {
        tooltipElement.removeAttribute('style');
    });
};
