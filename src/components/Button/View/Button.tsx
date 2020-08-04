import React, { FC } from 'react';
import { StyledButton } from './style/Button.style';
import { ButtonProps } from '../types';

//TODO: Implement css only animation
export const Button: FC<ButtonProps> = ({ ...props }) => {
    return <StyledButton {...props} />;
};

Button.displayName = `Button`;
