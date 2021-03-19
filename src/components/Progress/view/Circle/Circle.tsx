import React, { FC, useMemo } from 'react';

import { ProgressCirleProps } from '../../types';
import {
    interpolateTransition,
    useDefaultInterpolateTransitionValues,
} from '../../utils';
import {
    StyledProgressCircle,
    StyledProgressCircleSVG,
    StyledProgressCircleSVGBackground,
    StyledProgressCircleSVGColorful,
    StyledProgressCircleTextContainer,
    StyledProgressCircleText,
} from './styles';

export type ProgressCircleType = FC<ProgressCirleProps>;

export const ProgressCircle: ProgressCircleType = ({
    value,
    transitionColors,
    circleSize = 100,
    className,
    ...props
}) => {
    const defaultColors = useDefaultInterpolateTransitionValues();
    const color = useMemo(
        () => interpolateTransition(value, transitionColors || defaultColors),
        [defaultColors, transitionColors, value]
    );

    const strokeWidth = 3;
    const center = circleSize / 2;
    const radius = center - strokeWidth;
    const totalDashOffset = 2 * Math.PI * radius;
    const currentDashOffset = totalDashOffset - value * (totalDashOffset / 100);

    return (
        <StyledProgressCircle
            color={color}
            circleSize={circleSize}
            className={className}
            {...props}
        >
            <StyledProgressCircleSVG>
                <StyledProgressCircleSVGBackground
                    cx={center}
                    cy={center}
                    r={radius}
                    fill="none"
                    strokeWidth={strokeWidth}
                />
                <StyledProgressCircleSVGColorful
                    cx={center}
                    cy={center}
                    r={radius}
                    fill="none"
                    color={color}
                    strokeWidth={strokeWidth}
                    dashOffset={currentDashOffset}
                    dashArray={totalDashOffset}
                />
            </StyledProgressCircleSVG>
            <StyledProgressCircleTextContainer color={color}>
                <StyledProgressCircleText key={value}>
                    {`${value}%`}
                </StyledProgressCircleText>
            </StyledProgressCircleTextContainer>
        </StyledProgressCircle>
    );
};
