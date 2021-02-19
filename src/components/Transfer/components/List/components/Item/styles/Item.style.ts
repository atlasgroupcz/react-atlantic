import styled, { css } from 'styled-components';
import { StyledTransferListItemProps } from '../types';

export const StyledTransferListItem = styled.li<StyledTransferListItemProps>`
    box-sizing: border-box;
    width: 100%;
    padding: 0 ${({ theme }) => theme.padding.md};
    cursor: pointer;
    transition: background 300ms;

    &:hover {
        background: ${({ theme }) => theme.color.background.beta};
    }

    ${({ theme, size }) =>
        size === 'small' &&
        css`
            line-height: ${theme.height.sm};
            height: ${theme.height.sm};
        `}

    ${({ theme, size }) =>
        size === 'medium' &&
        css`
            line-height: ${theme.height.md};
            height: ${theme.height.md};
        `}
    
    ${({ theme, size }) =>
        size === 'large' &&
        css`
            line-height: ${theme.height.lg};
            height: ${theme.height.lg};
        `}
`;
