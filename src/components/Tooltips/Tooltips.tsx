import React, {
    createContext,
    FC,
    useCallback,
    useEffect,
    useMemo,
    useRef,
} from 'react';
import { TooltipContextType } from './types/TooltipContextType';
import { TooltipsProps } from './types/TooltipsProps';
import { StyledTooltip } from './styles';
import {
    attachTooltipToElement,
    cleanupTooltipElement,
    createTransition,
} from './utils';
import { isTooltipAttached } from './utils/isTooltipAttached';

export const TooltipContext = createContext<TooltipContextType>({} as any);

export const Tooltips: FC<TooltipsProps> = ({
    children,
    hideTooltips,
    contentAttr = 'data-title',
    positionAttr = 'data-position',
    Tooltip = StyledTooltip,
    transition = createTransition(200, 500, 'ease-out'),
}) => {
    const tooltipRef = useRef<HTMLDivElement>(null);
    const currentTooltip = useRef<HTMLElement | null>(null);

    const attachTooltip = useCallback(
        (e: Event) => {
            const tooltipElement = tooltipRef.current;
            const currentTarget = e.currentTarget as HTMLElement & EventTarget;

            if (tooltipElement && currentTarget) {
                currentTooltip.current = currentTarget;
                attachTooltipToElement(
                    currentTarget,
                    tooltipElement,
                    contentAttr,
                    positionAttr,
                    transition
                );
            }
        },
        [contentAttr, positionAttr, transition]
    );

    const cleanupTooltip = useCallback(() => {
        const tooltipElement = tooltipRef.current;
        if (!tooltipElement) return;

        const isAttached = isTooltipAttached(tooltipElement);
        if (isAttached) {
            cleanupTooltipElement(tooltipElement);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', cleanupTooltip, true);
        return () => {
            window.removeEventListener('scroll', cleanupTooltip, true);
        };
    }, [cleanupTooltip]);

    const value = useMemo<TooltipContextType>(
        () => ({
            currentTooltip,
            attachTooltip,
            cleanupTooltip,
        }),
        [attachTooltip, cleanupTooltip]
    );

    return (
        <TooltipContext.Provider value={value}>
            {children}
            {!hideTooltips && (
                <Tooltip ref={tooltipRef} positionAttr={positionAttr} />
            )}
        </TooltipContext.Provider>
    );
};
