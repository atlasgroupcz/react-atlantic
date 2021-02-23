export const cleanupListeners = (
    currentEls: NodeListOf<HTMLElement>,
    attachTooltip: (e: Event) => void,
    cleanupTooltip: () => void
) => {
    currentEls.forEach((el) =>
        el.removeEventListener('mouseenter', attachTooltip)
    );
    currentEls.forEach((el) =>
        el.removeEventListener('mouseout', cleanupTooltip)
    );
};
