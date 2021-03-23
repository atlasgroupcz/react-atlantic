import { useCallback, useContext, useEffect, useRef } from 'react';
import { TooltipContext } from '../Tooltips';

export const useTooltip = () => {
    const { attachTooltip, cleanupTooltip, currentTooltip } = useContext(
        TooltipContext
    );
    const ref = useRef<Set<HTMLElement | null>>(new Set());

    const tooltip = useCallback(
        (instance: HTMLElement | null) => {
            if (instance) {
                ref.current.add(instance);
                instance.addEventListener('mouseenter', attachTooltip);
                instance.addEventListener('mouseleave', cleanupTooltip);
            }
        },
        [attachTooltip, cleanupTooltip]
    );

    useEffect(() => {
        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            if (ref.current.has(currentTooltip?.current)) {
                cleanupTooltip();
            }
        };
    }, [cleanupTooltip, currentTooltip]);

    return tooltip;
};
