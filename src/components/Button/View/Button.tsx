import React, { FC } from 'react';
import { StyledButton } from './Style/Button.style';
import { ButtonProps } from '../Types';

//TODO: Implement css only animation
export const Button: FC<ButtonProps> = ({ type = 'default', ...props }) => {
    return <StyledButton type={type} {...props} />;
};

Button.displayName = `Button`;
