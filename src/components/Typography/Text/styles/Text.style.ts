import styled, { css } from 'styled-components';
import { TextProps } from '../types';
import { getTypographyDefaultStyles } from '../../styles';

export const getTextColor = (type: TextProps['type']) => css`
    ${({ theme }) =>
        type === 'default' &&
        css`
            color: ${theme.color.text.alpha};
        `}

    ${({ theme }) =>
        type === 'primary' &&
        css`
            color: ${theme.color.primary.alpha};
        `}

    ${({ theme }) =>
        type === 'success' &&
        css`
            color: ${theme.color.success.alpha};
        `}
  
  ${({ theme }) =>
        type === 'warning' &&
        css`
            color: ${theme.color.warning.alpha};
        `}
  
  ${({ theme }) =>
        type === 'error' &&
        css`
            color: ${theme.color.error.alpha};
        `}
`;

export const StyledText = styled.span<TextProps>`
    ${({ type }) => css`
        ${getTypographyDefaultStyles()};
        ${getTextColor(type)};
    `}
`;

export const StyledStrongText = styled.strong<TextProps>`
    ${({ type }) => css`
        ${getTypographyDefaultStyles()};
        ${getTextColor(type)};
        font-weight: 600;
    `}
`;

export const StyledMarkText = styled.mark<TextProps>`
    ${getTypographyDefaultStyles()};
    padding: 0 ${({ theme }) => theme.padding.xs};
    background-color: ${({ theme }) => theme.color.warning.gamma};
`;

export const StyledCodeText = styled.code<TextProps>`
    ${getTypographyDefaultStyles()};
    margin: 0 ${({ theme }) => theme.margin.sm};
    font-size: ${({ theme }) => theme.font.size.sm};
    background: ${({ theme }) => theme.color.default};
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: ${({ theme }) => parseInt(theme.radius, 0) - 2}px;
    padding: ${({ theme }) => theme.padding.xs}
        ${({ theme }) => theme.padding.md};
`;

export const StyledDelText = styled.del<TextProps>`
    ${getTypographyDefaultStyles()};
    padding: 0 ${({ theme }) => theme.padding.xs};
    background-color: ${({ theme }) => theme.color.error.gamma};
`;
