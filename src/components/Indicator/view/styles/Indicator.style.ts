import styled, { css } from 'styled-components';
import { IndicatorProps } from '../../types';

export const getIndicatorDefaultStyles = () => css`
    display: block;
    background-color: ${({ theme }) => theme.color.default};
`;

export const getIndicatorDefaultTypeStyles = (
    type: IndicatorProps['type']
) => css`
    ${({ theme }) =>
        type === 'primary' &&
        css`
            background-color: ${theme.color.primary.alpha};
        `}

    ${({ theme }) =>
        type === 'success' &&
        css`
            background-color: ${theme.color.success.alpha};
        `}
    
  ${({ theme }) =>
        type === 'warning' &&
        css`
            background-color: ${theme.color.warning.alpha};
        `}
    
  ${({ theme }) =>
        type === 'error' &&
        css`
            background-color: ${theme.color.error.alpha};
        `}

  ${({ theme }) =>
        type === 'info' &&
        css`
            background-color: ${theme.color.info.alpha};
        `}
`;

export const getIndicatorDefaultSizeStyles = (
    size: IndicatorProps['size']
) => css`
    ${({ theme }) =>
        size === 'small' &&
        css`
            width: ${theme.padding.sm};
            height: ${theme.padding.sm};
            border-radius: ${theme.padding.sm};
        `}

    ${({ theme }) =>
        size === 'medium' &&
        css`
            width: ${theme.padding.md};
            height: ${theme.padding.md};
            border-radius: ${theme.padding.md};
        `}
    
  ${({ theme }) =>
        size === 'large' &&
        css`
            width: ${theme.padding.lg};
            height: ${theme.padding.lg};
            border-radius: ${theme.padding.lg};
        `}
`;

export const StyledIndicator = styled.sup.withConfig({
    shouldForwardProp: (prop) => !['size', 'type', 'color'].includes(prop),
})<IndicatorProps>`
    ${({ size, type }) => css`
        ${getIndicatorDefaultStyles()}
        ${getIndicatorDefaultTypeStyles(type as IndicatorProps['type'])}
        ${getIndicatorDefaultSizeStyles(size as IndicatorProps['size'])}
    `}
`;
