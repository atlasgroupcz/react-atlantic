import styled, { keyframes, css } from 'styled-components';
import { Type } from '../../../../../types';

interface StyledProgressBarProps {
    type?: Type;
    progress?: Readonly<number>;
}

const animationFill = keyframes`
    0% {
        width: 0%;
    }

    100% {
        width: 100%;
    }
`;

export const StyledProgressBar = styled.div<StyledProgressBarProps>`
    display: flex;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
`;

export const StyledProgressBarLine = styled.div<StyledProgressBarProps>`
    width: 100%;
    height: 10px;
    position: relative;
    background: ${(props) => props.theme.color.background.gamma};
    border-radius: ${(props) => props.theme.radius};
`;

export const StyledProgressBarFillContainer = styled.div<
    StyledProgressBarProps
>`
    width: ${({ progress = 0 }) => progress}%;
    height: 100%;
    transition: width 0.5s cubic-bezier(0.79, 0.14, 0.15, 0.86);
`;

export const StyledProgressBarFill = styled.span<StyledProgressBarProps>`
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    margin: 0;
    border-radius: ${(props) => props.theme.radius};
    will-change: width;
    contain: strict;
    transition: background-color 0.5s;
    animation: ${animationFill} 0.5s cubic-bezier(0.79, 0.14, 0.15, 0.86);

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
`;
