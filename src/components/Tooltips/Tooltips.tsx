import React, { FC, useCallback, useEffect, useRef } from 'react';
import { Tooltip } from './style';
import {
    attachListeners,
    attachTooltipToElement,
    cleanupListeners,
    cleanupTooltipElement,
} from './utils';

type TooltipsProps = {
    contentAttr?: string;
    positionAttr?: string;
    hideTooltips?: boolean;
    delay?: number;
};

export const Tooltips: FC<TooltipsProps> = ({
    children,
    contentAttr = 'data-title',
    positionAttr = 'data-position',
}) => {
    const tooltipRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const attachTooltip = useCallback(
        (e: Event) => {
            const tooltipElement = tooltipRef.current;
            if (tooltipElement) {
                console.log(e);

                attachTooltipToElement(
                    e,
                    tooltipElement,
                    contentAttr,
                    positionAttr
                );
            }
        },
        [contentAttr, positionAttr]
    );

    const cleanupTooltip = useCallback(() => {
        const tooltipElement = tooltipRef.current;
        if (tooltipElement) {
            cleanupTooltipElement(tooltipElement);
        }
    }, []);

    useEffect(() => {
        if (containerRef.current) {
            const els = containerRef.current.querySelectorAll<HTMLElement>(
                `[${contentAttr}]`
            );
            attachListeners(els, attachTooltip, cleanupTooltip);
            return () => {
                cleanupListeners(els, attachTooltip, cleanupTooltip);
            };
        }
    });

    return (
        <div ref={containerRef}>
            {children}
            <Tooltip ref={tooltipRef} />
        </div>
    );
};
