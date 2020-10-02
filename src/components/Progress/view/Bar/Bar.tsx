import React, { FC, useMemo } from 'react';
import { ProgressBarProps } from '../../types';
import { getProgressFillType } from '../../utils/getProgressFillType';
import {
    StyledProgressBar,
    StyledProgressBarFill,
    StyledProgressBarFillContainer,
    StyledProgressBarLine,
} from './style';

export type ProgressBarType = FC<ProgressBarProps>;

export const ProgressBar: ProgressBarType = ({ value, ...props }) => {
    const fillType = useMemo(() => getProgressFillType(value), [value]);
    return (
        <StyledProgressBar {...props}>
            <StyledProgressBarLine>
                <StyledProgressBarFillContainer progress={value}>
                    <StyledProgressBarFill type={fillType} />
                </StyledProgressBarFillContainer>
            </StyledProgressBarLine>
        </StyledProgressBar>
    );
};
