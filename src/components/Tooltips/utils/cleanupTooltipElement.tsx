export const cleanupTooltipElement = (tooltipElement: HTMLDivElement) => {
    tooltipElement.removeAttribute('style');
    tooltipElement.innerText = '';
};
