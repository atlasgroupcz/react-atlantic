import React, { FC, useMemo } from 'react';
import { ProgressCirleProps } from '../../types';
import { getProgressFillType } from '../../utils/getProgressFillType';
import {
    StyledProgressCircle,
    StyledProgressCircleSVG,
    StyledProgressCircleSVGBackground,
    StyledProgressCircleSVGColorful,
    StyledProgressCircleTextContainer,
    StyledProgressCircleText,
} from './style';

export type ProgressCircleType = FC<ProgressCirleProps>;

export const ProgressCircle: ProgressCircleType = ({
    value,
    circleSize = 100,
    ...props
}) => {
    const fillType = useMemo(() => getProgressFillType(value), [value]);

    const strokeWidth = 3;
    const center = circleSize / 2;
    const radius = center - strokeWidth;
    const totalDashOffset = 2 * Math.PI * radius;
    const currentDashOffset = totalDashOffset - value * (totalDashOffset / 100);

    return (
        <StyledProgressCircle circleSize={circleSize} {...props}>
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
                    type={fillType}
                    strokeWidth={strokeWidth}
                    dashOffset={currentDashOffset}
                    dashArray={totalDashOffset}
                />
            </StyledProgressCircleSVG>
            <StyledProgressCircleTextContainer type={fillType}>
                <StyledProgressCircleText key={value}>
                    {`${value}%`}
                </StyledProgressCircleText>
            </StyledProgressCircleTextContainer>
        </StyledProgressCircle>
    );
};
