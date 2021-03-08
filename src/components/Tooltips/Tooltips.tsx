import React, { FC, useCallback, useEffect, useMemo, useRef } from 'react';
import { RefType } from '../../types/Ref';
import { StyledTooltipContainer, StyledTooltip } from './style';
import {
    attachListeners,
    attachTooltipToElement,
    cleanupListeners,
    cleanupTooltipElement,
    createTransition,
} from './utils';

type TooltipsProps = {
    contentAttr?: string;
    positionAttr?: string;
    hideTooltips?: boolean;
    transition?: string;
    Tooltip?: FC<{ ref: RefType<any>; positionAttr: string }>;
};

const createObserveOptions = (contentAttr: string) => ({
    attributeFilter: [contentAttr],
    attributes: true,
    childList: false,
    characterData: false,
    subtree: false,
});

const createTooltipObserver = (
    contentAttr: string,
    onContentUpdate: (value: string | null) => void
) =>
    new MutationObserver((mutationsList) => {
        console.log('update');

        for (const mutation of mutationsList) {
            onContentUpdate(
                (mutation.target as Element).getAttribute(contentAttr)
            );
        }
    });

export const Tooltips: FC<TooltipsProps> = ({
    children,
    hideTooltips,
    contentAttr = 'data-title',
    positionAttr = 'data-position',
    Tooltip = StyledTooltip,
    transition = createTransition(200, 500, 'ease-out'),
}) => {
    const tooltipRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    // const currentElements = useRef<Set<HTMLElement>>(new Set());

    const mutationObserver = useMemo(() => {
        const tooltipElement = tooltipRef.current;
        if (tooltipElement)
            return createTooltipObserver(contentAttr, (newValue) => {
                if (newValue) tooltipElement.innerText = newValue;
            });
        //! This memo needs to update on ref mount/update
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [contentAttr, tooltipRef.current]);

    const tooltipTarget = useRef<HTMLDivElement | null>(null);

    const attachTooltip = useCallback(
        (e: Event) => {
            const tooltipElement = tooltipRef.current;
            const target = e.target;
            if (tooltipElement && target) {
                tooltipTarget.current = target as HTMLDivElement;
                mutationObserver?.observe(
                    tooltipTarget.current,
                    createObserveOptions(contentAttr)
                );

                attachTooltipToElement(
                    e,
                    tooltipElement,
                    contentAttr,
                    positionAttr,
                    transition
                );
            }
        },
        [contentAttr, mutationObserver, positionAttr, transition]
    );

    const cleanupTooltip = useCallback(() => {
        const tooltipElement = tooltipRef.current;
        if (tooltipElement) {
            mutationObserver?.disconnect();
            cleanupTooltipElement(tooltipElement);
        }
    }, [mutationObserver]);

    useEffect(() => {
        const container = containerRef.current;
        if (container && !hideTooltips) {
            const els = container.querySelectorAll<HTMLElement>(
                `[${contentAttr}]`
            );

            attachListeners(els, attachTooltip, cleanupTooltip);

            return () => {
                cleanupListeners(els, attachTooltip, cleanupTooltip);
                if (!container.contains(tooltipTarget.current)) {
                    cleanupTooltip();
                }
            };
        }
    });

    return (
        <StyledTooltipContainer ref={containerRef}>
            {children}
            <Tooltip ref={tooltipRef} positionAttr={positionAttr} />
        </StyledTooltipContainer>
    );
};
