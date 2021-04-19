import styled, { css } from 'styled-components';
import { StyledIcon } from '../../../../Icon';
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

export const StyledProgressCircle = styled.div.withConfig({
    shouldForwardProp: (prop) => !['color', 'circleSize'].includes(prop),
})<StyledProgressCircleProps>`
    height: ${(props) => props.circleSize}px;
    width: ${(props) => props.circleSize}px;
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
    stroke: ${(props) => props.theme.color.border};
    stroke-width: ${(props) => props.strokeWidth};
`;

export const StyledProgressCircleSVGColorful = styled.circle.withConfig({
    shouldForwardProp: (prop) =>
        !['color', 'dashOffset', 'strokeWidth', 'dashArray'].includes(prop),
})<StyledSVGCircleProps>`
    stroke-width: ${(props) => props.strokeWidth};
    stroke-dasharray: ${(props) => props.dashArray};
    stroke-dashoffset: ${(props) => props.dashOffset};
    transform-origin: 50% 50%;
    transform: rotate(-90deg);
    transition: stroke 1s ease, stroke-dashoffset 1s ease;

    ${({ color }) =>
        color &&
        css`
            stroke: ${color};
        `}
`;

export const StyledProgressCircleText = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    font-family: ${(props) => props.theme.font.family};
    font-size: 26px;
    font-weight: 700;
    transform: translateX(-50%) translateY(-50%);

    ${StyledIcon} {
        color: ${(props) => props.theme.color.success.alpha};
    }
`;

export const StyledProgressCircleContent = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 25%;
    height: 25%;
    transition: color 0.3s ease-out;

    ${StyledIcon} {
        height: 100%;
        width: 100%;
        color: ${(props) => props.theme.color.success.alpha};
    }

    ${StyledText} {
        font-family: ${(props) => props.theme.font.family};
        font-weight: 700;
    }
`;

export const StyledProgressCircleTextContainer = styled.div.withConfig({
    shouldForwardProp: (prop) => !['color', 'circleSize'].includes(prop),
})<StyledProgressCircleProps>`
    transition: color 1s ease;

    ${({ color }) =>
        color &&
        css`
            background-color: ${color};
        `}
`;
