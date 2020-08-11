import styled, { css } from 'styled-components';
import { IndicatorProps } from '../../Types/Indicator.types';

export const StyledIndicator = styled.sup<IndicatorProps>`
  display: block;
  background-color: ${(props) => props.theme.color.default};
  
  ${(props) =>
      props.type === 'primary' &&
      css`
          background-color: ${props.theme.color.primary.alpha};
      `}
    
  ${(props) =>
      props.type === 'success' &&
      css`
          background-color: ${props.theme.color.success.alpha};
      `}
    
  ${(props) =>
      props.type === 'warning' &&
      css`
          background-color: ${props.theme.color.warning.alpha};
      `}
    
  ${(props) =>
      props.type === 'error' &&
      css`
          background-color: ${props.theme.color.error.alpha};
      `}
  
  ${(props) =>
      props.size === 'small' &&
      css`
          width: ${props.theme.padding.sm};
          height: ${props.theme.padding.sm};
          border-radius: ${props.theme.padding.sm};
      `}
    
  ${(props) =>
      props.size === 'medium' &&
      css`
          width: ${props.theme.padding.md};
          height: ${props.theme.padding.md};
          border-radius: ${props.theme.padding.md};
      `}
    
  ${(props) =>
      props.size === 'large' &&
      css`
          width: ${props.theme.padding.lg};
          height: ${props.theme.padding.lg};
          border-radius: ${props.theme.padding.lg};
      `}
`;
