import React, { FC } from 'react';
import { StyledButton } from './style/Button.style';
import { ButtonProps } from '../types';

//TODO: Implement css only animation
export const Button: FC<ButtonProps> = ({ type = 'default', ...props }) => {
    return <StyledButton type={type} {...props} />;
};

Button.displayName = `Button`;
