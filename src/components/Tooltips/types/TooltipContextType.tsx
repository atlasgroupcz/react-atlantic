import { MutableRefObject } from 'react';

export type TooltipContextType = {
    currentTooltip: MutableRefObject<HTMLElement | null>;
    cleanupTooltip: () => void;
    attachTooltip: (e: Event) => void;
};
