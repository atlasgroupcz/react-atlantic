import styled, { css } from 'styled-components';
import { excludeIntrinsicElementProps } from '../../../../../utils/excludeProps';

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

const excludeProgressCircle = excludeIntrinsicElementProps<
    StyledProgressCircleProps
>();
const circleExcludeArr: (keyof StyledProgressCircleProps)[] = [
    'color',
    'circleSize',
];

const excludeSVGCircle = excludeIntrinsicElementProps<StyledSVGCircleProps>();
const svgExcludeArr: (keyof StyledSVGCircleProps)[] = [
    'color',
    'dashOffset',
    'strokeWidth',
    'dashArray',
];

export const StyledProgressCircle = styled(
    excludeProgressCircle('div', circleExcludeArr)
)`
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

export const StyledProgressCircleSVGBackground = styled(
    excludeSVGCircle('circle', svgExcludeArr)
)`
    stroke: ${(props) => props.theme.color.border};
    stroke-width: ${(props) => props.strokeWidth};
`;

export const StyledProgressCircleSVGColorful = styled(
    excludeSVGCircle('circle', svgExcludeArr)
)`
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
    font-family: ${(props) => props.theme.font.family};
    font-size: 26px;
    font-weight: 700;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
`;

export const StyledProgressCircleTextContainer = styled(
    excludeProgressCircle('div', circleExcludeArr)
)`
    transition: color 1s ease;

    ${({ color }) =>
        color &&
        css`
            background-color: ${color};
        `}
`;
