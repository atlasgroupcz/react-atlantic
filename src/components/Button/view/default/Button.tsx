import React, { forwardRef, PropsWithChildren } from 'react';
import { StyledButton } from './styles';
import { ButtonProps } from '../../types';

export const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(
    ({ htmlType, type = 'default', className, isDisabled, isRound, isFullWidth, isTransparent, ...props }, ref) => {
        return (
            <StyledButton
                atlanticType={type}
                type={htmlType}
                className={className}
                {...props}
                ref={ref}
                data-is-disabled={isDisabled}
                data-is-round={isRound}
                data-is-full-width={isFullWidth}
                data-is-transparent={isTransparent}
            />
        );
    }
);

Button.displayName = `Button`;
