import { FC } from 'react';
import { styled } from '../../styled';
import { excludeIntrinsicElementProps } from '../../utils/excludeProps';
import { createTooltips } from './createTooltips';

type TooltipsProps = {
    contentAttr?: string;
    positionAttr?: string;
    hideTooltips?: boolean;
    delay?: number;
};
const exclude = excludeIntrinsicElementProps<TooltipsProps>();

const excludedKeys: (keyof TooltipsProps)[] = [
    'contentAttr',
    'positionAttr',
    'hideTooltips',
    'delay',
];

export const Tooltips = styled(
    exclude('div', excludedKeys) as FC<TooltipsProps>
)<TooltipsProps>`
    ${({
        contentAttr = 'data-title',
        positionAttr = 'data-position',
        hideTooltips = false,
        delay = 300,
    }) =>
        !hideTooltips ? createTooltips(contentAttr, positionAttr, delay) : ''}
`;
