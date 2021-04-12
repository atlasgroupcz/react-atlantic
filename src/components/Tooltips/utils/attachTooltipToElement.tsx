import { MouseEvent } from 'react';
import { DEFAULT_POSITION } from '../constants/DEFAULT_POSITION';
import { attachStyles } from './attachStyles';

export const attachTooltipToElement = (
    currentTarget: MouseEvent['currentTarget'],
    tooltipElement: HTMLDivElement,
    contentAttr: string,
    positionAttr: string,
    transition: string,
    padding: number,
    margin: number
) => {
    const viewportPosition = currentTarget.getBoundingClientRect();

    const preferredPosition =
        currentTarget.getAttribute(positionAttr) ?? DEFAULT_POSITION;

    const content = currentTarget.getAttribute(contentAttr);
    console.log(content, contentAttr);

    if (content !== null) {
        tooltipElement.innerText = content;

        if (preferredPosition)
            tooltipElement.setAttribute(positionAttr, preferredPosition);

        attachStyles(
            tooltipElement,
            viewportPosition,
            preferredPosition,
            transition,
            padding,
            margin
        );
    }
};
