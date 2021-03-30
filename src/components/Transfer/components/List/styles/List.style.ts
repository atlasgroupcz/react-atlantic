import styled, { css } from 'styled-components';
import { StyledTransferListProps } from '../types';
import { getTransferSideHeight } from '../../../utils/getTransferSideHeight';

export const StyledTransferList = styled.ul<StyledTransferListProps>`
    box-sizing: border-box;
    position: relative;
    overflow: auto;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 200px;
    list-style-type: none;

    ${({ theme, size, visibleItems }) =>
        visibleItems &&
        size === 'small' &&
        css`
            height: ${getTransferSideHeight(theme.height.sm, visibleItems)}px;
        `}

    ${({ theme, size, visibleItems }) =>
        visibleItems &&
        size === 'medium' &&
        css`
            height: ${getTransferSideHeight(theme.height.md, visibleItems)}px;
        `}
    
    ${({ theme, size, visibleItems }) =>
        visibleItems &&
        size === 'large' &&
        css`
            height: ${getTransferSideHeight(theme.height.lg, visibleItems)}px;
        `}
`;
