import styled, { css } from 'styled-components';
import { getTransferSideHeight } from '../../../../../../../utils';
import { TransferProps } from '../../../../../../../types';

type StyledTransferLeftSideNoResultsProps = Pick<
    TransferProps,
    'size' | 'visibleRows'
>;

export const StyledTransferLeftSideNoResults = styled.div<
    StyledTransferLeftSideNoResultsProps
>`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ theme, size, visibleRows }) =>
        visibleRows &&
        size === 'small' &&
        css`
            height: ${getTransferSideHeight(theme.height.sm, visibleRows)}px;
        `}

    ${({ theme, size, visibleRows }) =>
        visibleRows &&
        size === 'medium' &&
        css`
            height: ${getTransferSideHeight(theme.height.md, visibleRows)}px;
        `}
    
    ${({ theme, size, visibleRows }) =>
        visibleRows &&
        size === 'large' &&
        css`
            height: ${getTransferSideHeight(theme.height.lg, visibleRows)}px;
        `}
`;
