export const attachListeners = (
    currentEls: NodeListOf<HTMLElement>,
    attachTooltip: (e: Event) => void,
    cleanupTooltip: () => void
) => {
    for (const el of currentEls) {
        el.addEventListener('mouseenter', attachTooltip);
        el.addEventListener('mouseout', cleanupTooltip);
    }
};
