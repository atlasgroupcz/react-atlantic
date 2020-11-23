import { FC } from 'react';
import { styled } from '../../styled';
import { excludeIntrinsicElementProps } from '../../utils/excludeProps';
import { createTooltips } from './createTooltips';

type TooltipsProps = {
    contentAttr?: string;
    positionAttr?: string;
};
const exclude = excludeIntrinsicElementProps<TooltipsProps>();

const excludedKeys: (keyof TooltipsProps)[] = ['contentAttr', 'contentAttr'];
export const Tooltips = styled(
    exclude('div', excludedKeys) as FC<TooltipsProps>
)<TooltipsProps>`
    ${({ contentAttr, positionAttr }) =>
        createTooltips(contentAttr, positionAttr)}
`;
