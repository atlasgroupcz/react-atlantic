import React, { FC } from 'react';
import { StyledBadge, StyledIndicator } from './Badge.style';
import { BadgeProps } from './Badge.types';

export const Badge: FC<BadgeProps> = (props) => {
    const { children, ...rest } = props;

    if (!children) {
        return <StyledIndicator {...rest} />;
    }

    return <StyledBadge {...props} />;
};

Badge.defaultProps = {
    type: 'default',
    size: 'small',
};

Badge.displayName = `Badge`;
