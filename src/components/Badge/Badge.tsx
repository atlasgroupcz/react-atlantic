import React, { FC } from 'react';
import { StyledBadge } from './Badge.style';
import { BadgeProps } from './Badge.types';

export const Badge: FC<BadgeProps> = ({
    type = 'default',
    size = 'small',
    ...props
}) => <StyledBadge type={type} size={size} {...props} />;

Badge.displayName = `Badge`;
