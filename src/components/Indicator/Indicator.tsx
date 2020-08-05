import React, { FC } from 'react';
import { StyledIndicator } from './Indicator.style';
import { IndicatorProps } from './Indicator.types';

export const Indicator: FC<IndicatorProps> = ({ type, size, ...props }) => (
    <StyledIndicator type={type} size={size} {...props} />
);

Indicator.displayName = `Indicator`;
