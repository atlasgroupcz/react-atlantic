import styled, { css } from 'styled-components';
import { StyledSkeletonProps } from '../../types';
import { keyframes } from '../../../../styled';

export const skeletonShineAnimation = keyframes`
    from {
        background-position: 100% 50%;
    }
  
    to {
        background-position: 0 50%;
    }
`;

export const getSkeletonDefaultStyles = () => css`
    height: 100%;
    width: 100%;
    position: relative;
    margin: ${({ theme }) => theme.margin.sm} 0px;
    border-radius: ${({ theme }) => theme.radius};
    animation: ${skeletonShineAnimation} 1.6s ease infinite;
`;

export const getSkeletonDefaultBackgroundStyles = (
    animationColors: StyledSkeletonProps['animationColors'],
    bgColor: StyledSkeletonProps['bgColor']
) => css`
    background: linear-gradient(
        90deg,
        ${({ theme }) =>
                animationColors
                    ? animationColors.alpha
                    : theme.color.background.beta}
            25%,
        ${({ theme }) =>
                animationColors ? animationColors.beta : theme.color.border}
            37%,
        ${({ theme }) =>
                animationColors
                    ? animationColors.gamma
                    : theme.color.background.beta}
            63%
    );
    background-color: ${({ theme }) => bgColor || theme.color.default};
    background-size: 400% 100%;
`;

export const getSkeletonDefaultSizeStyles = (
    size: StyledSkeletonProps['size']
) => css`
    ${({ theme }) =>
        size === 'small' &&
        css`
            height: ${theme.height.sm};
        `}

    ${({ theme }) =>
        size === 'medium' &&
        css`
            height: ${theme.height.md};
        `}
    
    ${({ theme }) =>
        size === 'large' &&
        css`
            height: ${theme.height.lg};
        `}
`;

export const getSkeletonDefaultWidthStyles = (
    width: StyledSkeletonProps['width']
) => css`
    ${typeof width === 'string' &&
    css`
        width: ${width};
    `}

    ${typeof width === 'number' &&
    css`
        width: ${width}px;
    `}
`;

export const getSkeletonDefaultHeightStyles = (
    height: StyledSkeletonProps['height']
) => css`
    ${!!height &&
    css`
        height: ${height}px;
    `}
`;

export const getSkeletonDefaultShapeStyles = (
    shape: StyledSkeletonProps['shape']
) => css`
    ${shape === 'circle' &&
    css`
        border-radius: 100%;
    `}
`;

export const StyledSkeleton = styled.div.withConfig({
    shouldForwardProp: (prop) =>
        ![
            'size',
            'width',
            'height',
            'shape',
            'bgColor',
            'animationColors',
        ].includes(prop),
})<StyledSkeletonProps>`
    ${({ bgColor, animationColors, size, width, height, shape }) => css`
        ${getSkeletonDefaultStyles()};
        ${getSkeletonDefaultSizeStyles(size as StyledSkeletonProps['size'])};
        ${getSkeletonDefaultWidthStyles(width as StyledSkeletonProps['width'])};
        ${getSkeletonDefaultHeightStyles(
            height as StyledSkeletonProps['height']
        )};
        ${getSkeletonDefaultBackgroundStyles(
            animationColors as StyledSkeletonProps['animationColors'],
            bgColor as StyledSkeletonProps['bgColor']
        )};
        ${getSkeletonDefaultShapeStyles(shape as StyledSkeletonProps['shape'])};
    `}
`;
