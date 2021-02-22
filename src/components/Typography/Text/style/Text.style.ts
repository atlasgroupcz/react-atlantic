import styled, { css } from 'styled-components';
import { TextProps } from '../types';
import { getDefaultTypographyStyles } from '../../style';

export const StyledText = styled.span<TextProps>`
    ${(props) => getDefaultTypographyStyles(props)};

    ${(props) =>
        props.type === 'primary' &&
        css`
            color: ${props.theme.color.primary.alpha};
        `}

    ${(props) =>
        props.type === 'success' &&
        css`
            color: ${props.theme.color.success.alpha};
        `}
  
  ${(props) =>
        props.type === 'warning' &&
        css`
            color: ${props.theme.color.warning.alpha};
        `}
  
  ${(props) =>
        props.type === 'error' &&
        css`
            color: ${props.theme.color.error.alpha};
        `}
`;

export const StyledStrongText = styled.strong<TextProps>`
    ${(props) => getDefaultTypographyStyles(props)};

    font-weight: 600;

    ${(props) =>
        props.type === 'primary' &&
        css`
            color: ${props.theme.color.primary.alpha};
        `}

    ${(props) =>
        props.type === 'success' &&
        css`
            color: ${props.theme.color.success.alpha};
        `}
  
  ${(props) =>
        props.type === 'warning' &&
        css`
            color: ${props.theme.color.warning.alpha};
        `}
  
  ${(props) =>
        props.type === 'error' &&
        css`
            color: ${props.theme.color.error.alpha};
        `}
`;

export const StyledMarkText = styled.mark<TextProps>`
    ${(props) => getDefaultTypographyStyles(props)};
    padding: 0 ${(props) => props.theme.padding.xs};
    background-color: ${(props) => props.theme.color.warning.gamma};
`;

export const StyledCodeText = styled.code<TextProps>`
    ${(props) => getDefaultTypographyStyles(props)};
    margin: 0 ${(props) => props.theme.margin.sm};
    font-size: ${(props) => props.theme.font.size.sm};
    background: ${(props) => props.theme.color.default};
    border: 1px solid ${(props) => props.theme.color.border};
    border-radius: ${(props) => parseInt(props.theme.radius, 0) - 2}px;
    padding: ${(props) => props.theme.padding.xs}
        ${(props) => props.theme.padding.md};
`;

export const StyledDelText = styled.del<TextProps>`
    ${(props) => getDefaultTypographyStyles(props)};
    padding: 0 ${(props) => props.theme.padding.xs};
    background-color: ${(props) => props.theme.color.error.gamma};
`;
