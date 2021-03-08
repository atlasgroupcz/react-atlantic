import { MouseEvent } from 'react';
import { DEFAULT_POSITION } from '../constants/DEFAULT_POSITION';
import { attachStyles } from './attachStyles';

export const attachTooltipToElement = (
    e: Event,
    tooltipElement: HTMLDivElement,
    contentAttr: string,
    positionAttr: string,
    transition: string
) => {
    const event = (e as unknown) as MouseEvent;
    const currentTarget = event.currentTarget;

    const viewportPosition = currentTarget.getBoundingClientRect();

    // TODO: Prevent window overflow
    const preferredPosition =
        currentTarget.getAttribute(positionAttr) ?? DEFAULT_POSITION;

    const content = currentTarget.getAttribute(contentAttr);
    if (content) tooltipElement.innerText = content;
    if (preferredPosition)
        tooltipElement.setAttribute(positionAttr, preferredPosition);

    attachStyles(
        tooltipElement,
        viewportPosition,
        preferredPosition,
        transition
    );
};
