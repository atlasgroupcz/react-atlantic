import React, { FC } from 'react';
import { StyledIndicator } from './style/Indicator.style';
import { IndicatorProps } from '../types/Indicator.types';

export const Indicator: FC<IndicatorProps> = ({ type, size, ...props }) => (
    <StyledIndicator type={type} size={size} {...props} />
);

Indicator.displayName = `Indicator`;
