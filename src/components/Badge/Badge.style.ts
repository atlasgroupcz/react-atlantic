import styled, { css } from 'styled-components';
import { theme } from '../../theme';
import { Size, Type } from '../../types';

interface StyledBadgeProps {
    type?: Type;
    size?: Size;
}

export const StyledIndicator = styled.sup<StyledBadgeProps>`
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

export const StyledBadge = styled.sup<StyledBadgeProps>`
  display: inline-block;
  text-align: center;
  color: ${(props) => props.theme.color.text.alpha};
  font-family: ${(props) => props.theme.font.family};
  font-weight: 400;
  background-color: ${(props) => props.theme.color.default};
  border-radius: ${(props) => props.theme.radius};
  
  ${(props) =>
      props.type === 'primary' &&
      css`
          background-color: ${props.theme.color.primary.alpha};
          color: ${props.theme.color.text.gamma};
      `}
    
  ${(props) =>
      props.type === 'success' &&
      css`
          background-color: ${props.theme.color.success.alpha};
          color: ${props.theme.color.text.gamma};
      `}
    
  ${(props) =>
      props.type === 'warning' &&
      css`
          background-color: ${props.theme.color.warning.alpha};
          color: ${props.theme.color.text.gamma};
      `}
    
  ${(props) =>
      props.type === 'error' &&
      css`
          background-color: ${props.theme.color.error.alpha};
          color: ${props.theme.color.text.gamma};
      `}

  ${(props) =>
      props.size === 'small' &&
      css`
          padding: 2px ${props.theme.padding.sm};

          font-size: ${props.theme.font.size.sm};
      `}
  
    ${(props) =>
        props.size === 'medium' &&
        css`
            padding: ${props.theme.padding.sm}
                ${parseInt(props.theme.padding.md, 0) - 2}px;
            font-size: ${props.theme.font.size.md};
        `}
    
      ${(props) =>
          props.size === 'large' &&
          css`
              padding: ${props.theme.padding.md}
                  ${parseInt(props.theme.padding.lg, 0) - 2}px;
              font-size: ${props.theme.font.size.lg};
          `}
`;

StyledIndicator.defaultProps = {
    theme,
};

StyledBadge.defaultProps = {
    theme,
};
