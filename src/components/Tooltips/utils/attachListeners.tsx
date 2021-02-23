export const attachListeners = (
    currentEls: NodeListOf<HTMLElement>,
    attachTooltip: (e: Event) => void,
    cleanupTooltip: () => void
) => {
    currentEls.forEach((el) =>
        el.addEventListener('mouseenter', attachTooltip)
    );
    currentEls.forEach((el) => el.addEventListener('mouseout', cleanupTooltip));
};
