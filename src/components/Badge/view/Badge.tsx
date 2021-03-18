import React, { FC } from 'react';
import { StyledBadge } from './styles';
import { BadgeProps } from '../types';

export const Badge: FC<BadgeProps> = ({
    type = 'default',
    size = 'small',
    className,
    ...props
}) => <StyledBadge type={type} size={size} className={className} {...props} />;

Badge.displayName = `Badge`;
