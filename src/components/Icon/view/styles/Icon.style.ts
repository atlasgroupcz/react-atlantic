import { IconProps } from '../../types';
import { css, keyframes, styled } from '../../../../styled';

export const spin = keyframes`
  from {
      transform: rotate(0);
  }

  to {
      transform: rotate(360deg);
  }
`;

export const getIconDefaultStyles = (onClick: IconProps['onClick']) => css`
    display: inline-block;
    cursor: ${!!onClick ? 'pointer' : 'inherit'};
    line-height: 0;
    width: 24px;
    height: 24px;
    color: ${({ theme }) => theme.color.text.alpha};
    font-style: normal;
    text-align: center;
    text-transform: none;

    svg,
    img {
        vertical-align: top;
        width: 100%;
        height: 100%;
        font-size: inherit;
    }
`;

export const getIconDefaultRotatingStyles = (
    isRotating: IconProps['isRotating']
) => css`
    ${isRotating &&
    css`
        animation: ${spin} 4s linear infinite;
    `}
`;

export const StyledIcon = styled.i.withConfig({
    shouldForwardProp: (prop) => !['isRotating', 'name'].includes(prop),
})<IconProps>`
    ${({ onClick, isRotating }) => css`
        ${getIconDefaultStyles(onClick as IconProps['onClick'])};
        ${getIconDefaultRotatingStyles(isRotating as IconProps['isRotating'])};
    `}
`;

StyledIcon.displayName = 'StyledIcon';
