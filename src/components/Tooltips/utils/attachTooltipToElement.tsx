import { MouseEvent } from 'react';
import { DEFAULT_POSITION } from '../constants/DEFAULT_POSITION';
import { attachStyles } from './attachStyles';

export const attachTooltipToElement = (
    currentTarget: MouseEvent['currentTarget'],
    tooltipElement: HTMLDivElement,
    contentAttr: string,
    positionAttr: string,
    transition: string
) => {
    const viewportPosition = currentTarget.getBoundingClientRect();

    // TODO: Prevent window overflow
    const preferredPosition =
        currentTarget.getAttribute(positionAttr) ?? DEFAULT_POSITION;

    console.log(currentTarget);

    const content = currentTarget.getAttribute(contentAttr);

    if (content !== null) {
        tooltipElement.innerText = content;

        if (preferredPosition)
            tooltipElement.setAttribute(positionAttr, preferredPosition);

        attachStyles(
            tooltipElement,
            viewportPosition,
            preferredPosition,
            transition
        );
    }
};
