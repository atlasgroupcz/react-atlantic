import React, { FC } from 'react';
import { StyledIndicator } from './styles';
import { IndicatorProps } from '../types';

export const Indicator: FC<IndicatorProps> = ({ type, size, className, ...props }) => (
    <StyledIndicator type={type} size={size} className={className} data-size={size} data-type={type} {...props} />
);

Indicator.displayName = `Indicator`;
