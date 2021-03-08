export const cleanupListeners = (
    currentEls: NodeListOf<HTMLElement>,
    attachTooltip: (e: Event) => void,
    cleanupTooltip: () => void
) => {
    for (const el of currentEls) {
        el.removeEventListener('mouseenter', attachTooltip);
        el.removeEventListener('mouseout', cleanupTooltip);
    }
};
