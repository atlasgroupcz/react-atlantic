import React, {
    createContext,
    FC,
    useCallback,
    useContext,
    useEffect,
    useRef,
} from 'react';

import { RefType } from '../../types/Ref';
import { StyledTooltipContainer, StyledTooltip } from './style';
import {
    attachListeners,
    attachTooltipToElement,
    cleanupTooltipElement,
    createTransition,
} from './utils';
import debounce from 'lodash.debounce';

type TooltipsProps = {
    contentAttr?: string;
    positionAttr?: string;
    hideTooltips?: boolean;
    transition?: string;
    Tooltip?: FC<{ ref: RefType<any>; positionAttr: string }>;
};

const tooltipSet = new Set<HTMLElement | null>();

const garbageCollect = (attach: any, cleanup: any) => {
    for (const ref of tooltipSet) {
        const exists = ref?.isConnected;
        if (!exists) tooltipSet.delete(ref);
    }

    update(attach, cleanup);
};

const reconcile = debounce(garbageCollect, 50);

const update = (attach: any, cleanup: any) => {
    attachListeners(tooltipSet, attach, cleanup);
};

const TooltipContext = createContext<(instance: HTMLElement | null) => void>(
    () => {}
);

export const useTooltip = () => useContext(TooltipContext);

export const Tooltips: FC<TooltipsProps> = ({
    children,
    hideTooltips,
    contentAttr = 'data-title',
    positionAttr = 'data-position',
    Tooltip = StyledTooltip,
    transition = createTransition(200, 500, 'ease-out'),
}) => {
    const tooltipRef = useRef<HTMLDivElement>(null);

    const attachTooltip = useCallback(
        (e: Event) => {
            const tooltipElement = tooltipRef.current;
            const currentTarget = e.currentTarget as HTMLElement & EventTarget;

            if (
                tooltipElement &&
                currentTarget &&
                tooltipSet.has(currentTarget)
            ) {
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

        const isAttached = tooltipElement.hasAttribute('style');
        if (isAttached) {
            cleanupTooltipElement(tooltipElement);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', cleanupTooltip);
        return () => {
            window.removeEventListener('scroll', cleanupTooltip);
        };
    }, [cleanupTooltip]);

    const tooltip = useCallback(
        (instance: HTMLElement | null) => {
            if (instance) {
                tooltipSet.add(instance);
                reconcile(attachTooltip, cleanupTooltip);
            }
        },
        [attachTooltip, cleanupTooltip]
    );

    return (
        <TooltipContext.Provider value={tooltip}>
            {children}
            {!hideTooltips && (
                <Tooltip ref={tooltipRef} positionAttr={positionAttr} />
            )}
        </TooltipContext.Provider>
    );
};
