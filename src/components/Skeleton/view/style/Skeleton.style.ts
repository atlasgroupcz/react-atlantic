import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { Size, Shape } from '../../../../types';

interface StyledSkeletonProps {
    size?: Size;
    width?: number | string;
    height?: number;
    shape?: Shape;
    bgColor?: string;
    animationColors?: {
        alpha: string;
        beta: string;
        gamma: string;
    };
}

const sizeFactory = (size: Size, theme: Theme): FlattenSimpleInterpolation => {
    switch (size) {
        case 'small':
            return css`
                height: ${theme.height.sm};
            `;
        case 'medium':
            return css`
                height: ${theme.height.md};
            `;
        case 'large':
            return css`
                height: ${theme.width.lg};
            `;
    }
};

const parseWidth = (width: number | string): FlattenSimpleInterpolation => {
    return typeof width === 'string'
        ? css`
              width: ${width};
          `
        : css`
              width: ${width}px;
          `;
};

export const StyledSkeleton = styled.div<StyledSkeletonProps>`
  position: relative;
  background-color: ${(props) => props.bgColor || props.theme.color.default};
  margin: ${(props) => props.theme.margin.sm} 0px;
  border-radius: 4px;

  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(25%, ${(props) =>
        props.animationColors
            ? props.animationColors.alpha
            : props.theme.color.background.beta}),
    color-stop(37%, ${(props) =>
        props.animationColors
            ? props.animationColors.beta
            : props.theme.color.border}),
    color-stop(63%, ${(props) =>
        props.animationColors
            ? props.animationColors.gamma
            : props.theme.color.background.beta})
  );
  background: linear-gradient(
    90deg,
    ${(props) =>
        props.animationColors
            ? props.animationColors.alpha
            : props.theme.color.background.beta} 25%,
    ${(props) =>
        props.animationColors
            ? props.animationColors.beta
            : props.theme.color.border} 37%,
    ${(props) =>
        props.animationColors
            ? props.animationColors.gamma
            : props.theme.color.background.beta} 63%
  );
  background-size: 400% 100%;
  -webkit-animation: shine 1.6s ease infinite;
  animation: shine 1.6s ease infinite;

  @keyframes shine {
    0% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
  
  width: 100%;
  height: 100%;
  
  ${(props) => props.size && sizeFactory(props.size, props.theme)}
  
  ${(props) => props.width && parseWidth(props.width)}
  
  ${(props) =>
      props.height &&
      css`
          height: ${props.height}px;
      `}
  
  ${(props) =>
      props.shape === `circle` &&
      css`
          border-radius: 100%;
      `}
`;

StyledSkeleton.defaultProps = {
    theme,
};
