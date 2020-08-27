import styled, { css } from 'styled-components';
import { ThemeType } from '../../../theme';
import { TextProps } from './types';

export const getDefaultStyledText = (props: { theme: ThemeType }) => css`
    color: ${props.theme.color.text.alpha};
    font-size: ${props.theme.font.size.md};
    font-family: ${props.theme.font.family};
    line-height: 1.5;
    margin: ${props.theme.margin.sm} 0;

    button,
    input[type='text'],
    input[type='number'],
    input[type='email'] {
        margin: 0 ${props.theme.margin.sm};
    }

    i {
        color: ${props.theme.color.primary.alpha};
    }

    ::selection,
    ::-moz-selection {
        background: ${props.theme.color.primary.delta};
    }
`;

export const StyledText = styled.span<TextProps>`
  ${getDefaultStyledText};
  
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
  ${getDefaultStyledText};

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
    ${getDefaultStyledText};
    padding: 0 ${(props) => props.theme.padding.xs};
    background-color: ${(props) => props.theme.color.warning.gamma};
`;

export const StyledCodeText = styled.code<TextProps>`
    ${getDefaultStyledText};
    margin: 0 ${(props) => props.theme.margin.sm};
    font-size: ${(props) => props.theme.font.size.sm};
    background: ${(props) => props.theme.color.default};
    border: 1px solid ${(props) => props.theme.color.border};
    border-radius: ${(props) => parseInt(props.theme.radius, 0) - 2}px;
    padding: ${(props) => props.theme.padding.xs}
        ${(props) => props.theme.padding.md};
`;

export const StyledDelText = styled.del<TextProps>`
    ${getDefaultStyledText};
    padding: 0 ${(props) => props.theme.padding.xs};
    background-color: ${(props) => props.theme.color.error.gamma};
`;
