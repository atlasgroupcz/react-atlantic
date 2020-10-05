import React, { FC } from 'react';
import { StyledButton } from './style/Button.style';
import { ButtonProps } from '../types';

//TODO: Implement css only animation
export const Button: FC<ButtonProps> = ({
    htmlType,
    type = 'default',
    ...props
}) => {
    return <StyledButton atlanticType={type} type={htmlType} {...props} />;
};

Button.displayName = `Button`;
