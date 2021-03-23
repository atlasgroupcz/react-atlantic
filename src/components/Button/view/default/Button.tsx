import React, { FC } from 'react';
import { StyledButton } from './styles';
import { ButtonProps } from '../../types';

//TODO: Implement css only animation
export const Button: FC<ButtonProps> = ({
    htmlType,
    type = 'default',
    className,
    ...props
}) => {
    return (
        <StyledButton
            atlanticType={type}
            type={htmlType}
            className={className}
            {...props}
        />
    );
};

Button.displayName = `Button`;
