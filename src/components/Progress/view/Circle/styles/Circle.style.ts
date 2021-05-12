import styled, { css } from 'styled-components';
import { keyframes } from '../../../../../styled';
import { Icon } from '../../../../Icon';
import { StyledText } from '../../../../Typography';

interface StyledSVGCircleProps {
    color?: string;
    dashOffset?: number;
    strokeWidth?: number;
    dashArray?: number;
}
interface StyledProgressCircleProps {
    circleSize?: number;
    color?: string;
}

const dashCheck = keyframes` 
    0% {
        stroke-dashoffset: -100;
    }
    100% {
        stroke-dashoffset: 900;
    }
`;

export const StyledProgressCircleContainer = styled.div`
    display: flex;
`;

export const StyledProgressCircle = styled.div.withConfig({
    shouldForwardProp: (prop) => !['color', 'circleSize'].includes(prop),
})<StyledProgressCircleProps>`
    height: ${({ circleSize }) => circleSize}px;
    width: ${({ circleSize }) => circleSize}px;
    position: relative;
`;

export const StyledProgressCircleSVG = styled.svg`
    height: 100%;
    width: 100%;
    display: block;
    max-width: 100%;
`;

export const StyledProgressCircleSVGBackground = styled.circle.withConfig({
    shouldForwardProp: (prop) =>
        !['color', 'dashOffset', 'strokeWidth', 'dashArray'].includes(prop),
})<StyledSVGCircleProps>`
    stroke: ${({ theme }) => theme.color.border};
    stroke-width: ${({ strokeWidth }) => strokeWidth};
`;

export const StyledProgressCircleSVGColorful = styled.circle.withConfig({
    shouldForwardProp: (prop) =>
        !['color', 'dashOffset', 'strokeWidth', 'dashArray'].includes(prop),
})<StyledSVGCircleProps>`
    stroke-width: ${({ strokeWidth }) => strokeWidth};
    stroke-dasharray: ${({ dashArray }) => dashArray};
    stroke-dashoffset: ${({ dashOffset }) => dashOffset};
    transform-origin: 50% 50%;
    transform: rotate(-90deg);
    transition: stroke 1s ease, stroke-dashoffset 1s ease;

    ${({ color }) =>
        color &&
        css`
            stroke: ${color};
        `}
`;

export const StyledProgressCircleContent = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);

    ${StyledText} {
        font-family: ${({ theme }) => theme.font.family};
        font-weight: 700;
        font-size: ${({ theme }) => theme.font.size.md};
    }
`;

export const StyledProgressCircleCheckSVG = styled.svg`
    height: 100%;
    width: 100%;
`;

export const StyledProgressCircleCheckSVGColorful = styled.polyline`
    stroke: ${({ theme }) => theme.color.success.alpha};
    stroke-width: 10;
    stroke-linecap: round;
    stroke-dasharray: 1000;
    animation: ${dashCheck} 1s ease-in-out forwards;
`;

export const StyledProgressCircleFailedIcon = styled(Icon)`
    color: ${({ theme }) => theme.color.error.alpha};
`;
