import styled, { css } from 'styled-components';
import { TransferListProps } from '../../../../../../../types/TransferListProps';
import { getTransferSideHeight } from '../../../../../../../utils/getTransferSideHeight';

type StyledTransferListProps = Pick<TransferListProps, 'size' | 'visibleRows'>;

export const StyledTransferList = styled.ul<StyledTransferListProps>`
    box-sizing: border-box;
    overflow: auto;
    padding: 0;
    margin: 0;
    width: 100%;
    list-style-type: none;

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
