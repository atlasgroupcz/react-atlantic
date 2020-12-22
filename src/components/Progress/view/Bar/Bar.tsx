import React, { FC, useMemo } from 'react';
import { ProgressBarProps } from '../../types';
import {
    interpolateTransition,
    useDefaultInterpolateTransitionValues,
} from '../../utils';
import {
    StyledProgressBar,
    StyledProgressBarFill,
    StyledProgressBarFillContainer,
    StyledProgressBarLine,
} from './style';

export type ProgressBarType = FC<ProgressBarProps>;

export const ProgressBar: ProgressBarType = ({
    value,
    transitionColors,
    ...props
}) => {
    const defaultColors = useDefaultInterpolateTransitionValues();
    const color = useMemo(
        () => interpolateTransition(value, transitionColors || defaultColors),
        [defaultColors, transitionColors, value]
    );
    return (
        <StyledProgressBar {...props}>
            <StyledProgressBarLine>
                <StyledProgressBarFillContainer progress={value}>
                    <StyledProgressBarFill color={color} />
                </StyledProgressBarFillContainer>
            </StyledProgressBarLine>
        </StyledProgressBar>
    );
};
