export const cleanupListeners = (
    currentEls: Set<HTMLElement | null>,
    attachTooltip: (e: Event) => void,
    cleanupTooltip: () => void
) => {
    for (const el of currentEls) {
        if (!el) continue;
        el.removeEventListener('mouseenter', attachTooltip);
        el.removeEventListener('mouseout', cleanupTooltip);
    }
};
