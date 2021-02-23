import { MouseEvent } from 'react';
import { attachStyles } from './attachStyles';

export const attachTooltipToElement = (
    e: Event,
    tooltipElement: HTMLDivElement,
    contentAttr: string,
    positionAttr: string
) => {
    const event = (e as unknown) as MouseEvent;
    const currentTarget = event.currentTarget;

    const viewportPosition = currentTarget.getBoundingClientRect();

    // TODO: Prevent window overflow
    const preferredPosition = currentTarget.getAttribute(positionAttr);

    const content = currentTarget.getAttribute(contentAttr);
    if (content) tooltipElement.innerText = content;

    attachStyles(tooltipElement, viewportPosition, preferredPosition);
};
