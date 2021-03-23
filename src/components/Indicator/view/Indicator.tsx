import React, { FC } from 'react';
import { StyledIndicator } from './styles';
import { IndicatorProps } from '../types';

export const Indicator: FC<IndicatorProps> = ({
    type,
    size,
    className,
    ...props
}) => (
    <StyledIndicator type={type} size={size} className={className} {...props} />
);

Indicator.displayName = `Indicator`;
