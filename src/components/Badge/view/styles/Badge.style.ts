import styled, { css } from 'styled-components';
import { BadgeProps } from '../../types';

export const getBadgeDefaultStyles = () => css`
    display: inline-block;
    text-align: center;
    color: ${(props) => props.theme.color.text.alpha};
    font-family: ${(props) => props.theme.font.family};
    font-weight: 400;
    background-color: ${(props) => props.theme.color.default};
    border-radius: ${(props) => props.theme.radius};
`;

export const getBadgeTypeStyles = (type: BadgeProps) => css`
    ${(props) =>
        type === 'primary' &&
        css`
            background-color: ${props.theme.color.primary.alpha};
            color: ${props.theme.color.text.gamma};
        `}

    ${(props) =>
        type === 'success' &&
        css`
            background-color: ${props.theme.color.success.alpha};
            color: ${props.theme.color.text.gamma};
        `}

    ${(props) =>
        type === 'warning' &&
        css`
            background-color: ${props.theme.color.warning.alpha};
            color: ${props.theme.color.text.gamma};
        `}

    ${(props) =>
        type === 'error' &&
        css`
            background-color: ${props.theme.color.error.alpha};
            color: ${props.theme.color.text.gamma};
        `}
`;

export const getBadgeSizeStyles = (size: BadgeProps) => css`
    ${(props) =>
        size === 'small' &&
        css`
            padding: 2px ${props.theme.padding.sm};

            font-size: ${props.theme.font.size.sm};
        `}

    ${(props) =>
        size === 'medium' &&
        css`
            padding: ${props.theme.padding.sm}
                ${parseInt(props.theme.padding.md, 0) - 2}px;
            font-size: ${props.theme.font.size.md};
        `}
    
    ${(props) =>
        size === 'large' &&
        css`
            padding: ${props.theme.padding.md}
                ${parseInt(props.theme.padding.lg, 0) - 2}px;
            font-size: ${props.theme.font.size.lg};
        `}
`;

export const StyledBadge = styled.sup.withConfig({
    shouldForwardProp: (prop) => !['size', 'type', 'color'].includes(prop),
})<BadgeProps>`
    ${getBadgeDefaultStyles()};

    ${(props) => getBadgeTypeStyles(props.type as BadgeProps)};

    ${(props) => getBadgeSizeStyles(props.size as BadgeProps)};
`;
