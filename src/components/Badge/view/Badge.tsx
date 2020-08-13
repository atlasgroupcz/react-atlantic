import React, { FC } from 'react';
import { StyledBadge } from './style';
import { BadgeProps } from '../types';

export const Badge: FC<BadgeProps> = ({
    type = 'default',
    size = 'small',
    ...props
}) => <StyledBadge type={type} size={size} {...props} />;

Badge.displayName = `Badge`;
