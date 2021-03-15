import debounce from 'lodash.debounce';

export const attachListeners = (
    currentEls: Set<HTMLElement | null>,
    attachTooltip: (e: Event) => void,
    cleanupTooltip: () => void
) => {
    // if (typeof window !== 'undefined') {
    //     window.addEventListener('scroll', throttledCleanup);
    // }
    for (const el of currentEls) {
        if (!el) continue;
        el.addEventListener('mouseenter', attachTooltip);
        el.addEventListener('mouseout', cleanupTooltip);
    }
};
