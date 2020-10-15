import React, { FC } from 'react';
import { SimpleButtonProps } from '../../types';
import { StyledSimpleButton } from './style';

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
