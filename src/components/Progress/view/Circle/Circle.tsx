import React, { FC, useMemo } from 'react';
import { useTheme } from '../../../../styled';
import { Text } from '../../../Typography';
import { ProgressCirleProps } from '../../types';
import {
    interpolateTransition,
    useDefaultInterpolateTransitionValues,
} from '../../utils';
import {
    StyledProgressCircleContainer,
    StyledProgressCircle,
    StyledProgressCircleSVG,
    StyledProgressCircleSVGBackground,
    StyledProgressCircleSVGColorful,
    StyledProgressCircleContent,
    StyledProgressCircleCheckSVG,
    StyledProgressCircleCheckSVGColorful,
    StyledProgressCircleFailedIcon,
} from './styles';

export type ProgressCircleType = FC<ProgressCirleProps>;

export const ProgressCircle: ProgressCircleType = ({
    value,
    transitionColors,
    circleSize = 100,
    failed,
    ...props
}) => {
    const theme = useTheme();
    const failedColor = theme.color.error.alpha;
    const defaultColors = useDefaultInterpolateTransitionValues();
    const color = useMemo(
        () =>
            failed
                ? failedColor
                : interpolateTransition(
                      value,
                      transitionColors || defaultColors
                  ),
        [failed, failedColor, value, transitionColors, defaultColors]
    );

    const strokeWidth = 3;
    const center = circleSize / 2;
    const radius = center - strokeWidth;
    const totalDashOffset = 2 * Math.PI * radius;
    const currentDashOffset = totalDashOffset - value * (totalDashOffset / 100);

    return (
        <StyledProgressCircleContainer>
            <StyledProgressCircle
                color={color}
                circleSize={circleSize}
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
                <StyledProgressCircleContent>
                    {value === 100 ? (
                        <>
                            {failed ? (
                                <StyledProgressCircleFailedIcon
                                    name={'close'}
                                />
                            ) : (
                                <StyledProgressCircleCheckSVG
                                    viewBox="0 0 130.2 130.2"
                                    fill="none"
                                >
                                    <StyledProgressCircleCheckSVGColorful points="100.2,40.2 51.5,88.8 29.8,67.5" />
                                </StyledProgressCircleCheckSVG>
                            )}
                        </>
                    ) : (
                        <Text key={value}>{`${value}%`}</Text>
                    )}
                </StyledProgressCircleContent>
            </StyledProgressCircle>
        </StyledProgressCircleContainer>
    );
};
