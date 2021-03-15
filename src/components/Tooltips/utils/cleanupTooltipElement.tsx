export const cleanupTooltipElement = (tooltipElement: HTMLDivElement) => {
    requestAnimationFrame(() => {
        tooltipElement.removeAttribute('style');
        tooltipElement.innerText = '';
    });
};
