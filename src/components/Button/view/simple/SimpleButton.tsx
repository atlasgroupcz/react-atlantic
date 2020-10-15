import React, { FC } from 'react';
import { ButtonProps } from '../../types';
import { StyledSimpleButton } from './style';

export type SimpleButtonProps = {
    isAlternative?: boolean;
} & ButtonProps;

export const SimpleButton: FC<SimpleButtonProps> = ({
    type = 'default',
    isAlternative = false,
    ...props
}) => {
    return (
        <StyledSimpleButton
            isAlternative={isAlternative}
            type={type}
            {...props}
        />
    );
};
