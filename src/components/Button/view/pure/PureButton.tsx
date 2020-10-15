import React, { FC } from 'react';
import { ButtonProps } from '../../types';
import { StyledPureButton } from './style';

export type PureButtonProps = {} & ButtonProps;

export const PureButton: FC<PureButtonProps> = ({
    htmlType,
    type = 'default',

    ...props
}) => {
    return <StyledPureButton atlanticType={type} type={htmlType} {...props} />;
};
