import styled, { css } from 'styled-components';
import { BadgeProps } from '../../types';

export const getBadgeDefaultStyles = () => css`
    display: inline-block;
    text-align: center;
    font-family: ${({ theme }) => theme.font.family};
    font-weight: 400;
    color: ${({ theme }) => theme.color.text.alpha};
    background-color: ${({ theme }) => theme.color.default};
    border-radius: ${({ theme }) => theme.radius};
`;

export const getBadgeDefaultTypeStyles = (type: BadgeProps['type']) => css`
    ${({ theme }) =>
        type === 'primary' &&
        css`
            background-color: ${theme.color.primary.alpha};
            color: ${theme.color.text.gamma};
        `}

    ${({ theme }) =>
        type === 'success' &&
        css`
            background-color: ${theme.color.success.alpha};
            color: ${theme.color.text.gamma};
        `}

    ${({ theme }) =>
        type === 'warning' &&
        css`
            background-color: ${theme.color.warning.alpha};
            color: ${theme.color.text.gamma};
        `}

    ${({ theme }) =>
        type === 'error' &&
        css`
            background-color: ${theme.color.error.alpha};
            color: ${theme.color.text.gamma};
        `}

    ${({ theme }) =>
        type === 'info' &&
        css`
            background-color: ${theme.color.info.alpha};
            color: ${theme.color.text.gamma};
        `}
`;

export const getBadgeDefaultSizeStyles = (size: BadgeProps['size']) => css`
    ${({ theme }) =>
        size === 'small' &&
        css`
            padding: 2px ${theme.padding.sm};
            font-size: ${theme.font.size.sm};
        `}

    ${({ theme }) =>
        size === 'medium' &&
        css`
            padding: ${theme.padding.sm} ${parseInt(theme.padding.md, 0) - 2}px;
            font-size: ${theme.font.size.md};
        `}
    
    ${({ theme }) =>
        size === 'large' &&
        css`
            padding: ${theme.padding.md} ${parseInt(theme.padding.lg, 0) - 2}px;
            font-size: ${theme.font.size.lg};
        `}
`;

export const StyledBadge = styled.sup.withConfig({
    shouldForwardProp: (prop) => !['size', 'type', 'color'].includes(prop),
})<BadgeProps>`
    ${({ type, size }) => css`
        ${getBadgeDefaultStyles()};
        ${getBadgeDefaultTypeStyles(type)};
        ${getBadgeDefaultSizeStyles(size)};
    `}
`;
