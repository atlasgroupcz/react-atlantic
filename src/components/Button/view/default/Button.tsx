import React, { forwardRef } from 'react';
import { StyledButton } from './styles';
import { ButtonProps } from '../../types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ htmlType, type = 'default', className, ...props }, ref) => {
        return <StyledButton atlanticType={type} type={htmlType} className={className} {...props} ref={ref} />;
    }
);

Button.displayName = `Button`;
