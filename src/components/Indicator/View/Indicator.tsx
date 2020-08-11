import React, { FC } from 'react';
import { StyledIndicator } from './Style/Indicator.style';
import { IndicatorProps } from '../Types/Indicator.types';

export const Indicator: FC<IndicatorProps> = ({ type, size, ...props }) => (
    <StyledIndicator type={type} size={size} {...props} />
);

Indicator.displayName = `Indicator`;
